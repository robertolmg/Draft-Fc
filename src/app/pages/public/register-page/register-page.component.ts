// Angular import
import { Component, effect, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { LayoutConfig } from 'src/app/app-config';
import { ThemeService } from 'src/app/theme/shared/service/theme.service';
import { AuthenticationService } from '../../../core/authentication/authentication.service';
import { NewRegisterRequest, UserTypeEnum } from '../../../shared/entities/authentication/NewRegisterRequest';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/core/user/user.service';
import { APPLICATION_ROUTES } from 'src/app/core/shared/enums';

@Component({
  selector: 'app-register-page',
  imports: [RouterModule, SharedModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent  implements OnInit {
  // public props
  themeMode!: boolean;
  newRegisterFomGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  //  constructor
  constructor(
      private themeService: ThemeService,
      private router: Router,
      private authService: AuthenticationService,
      private userService: UserService
  ) {
    effect(() => {
      this.isDarkTheme(this.themeService.isDarkTheme());
    });
  }

  // life cycle event
  ngOnInit() {
    this.themeMode = LayoutConfig.isDarkMode;
  }

  // private method
  private isDarkTheme(isDark: boolean) {
    this.themeMode = isDark;
  }

  public async Register(): Promise<void> {
    var userId = await this.authService.CreateNewRegister(this.GetNewRegisterAuthObject());
    if (userId != null) {
      this.userService.CreateNewUser(
        userId,
        this.newRegisterFomGroup.get('firstName')?.value ?? '',
        this.newRegisterFomGroup.get('lastName')?.value ?? '',
        this.newRegisterFomGroup.get('email')?.value ?? ''
      );
      this.router.navigate([APPLICATION_ROUTES.LOGIN]);
    }
    else {
      alert('One ore more errors occured, please check the information provided.');
    }
  }

  private GetNewRegisterAuthObject(): NewRegisterRequest {
    let newRegister = new NewRegisterRequest();
    newRegister.firstName = this.newRegisterFomGroup.get('firstName')?.value ?? '';
    newRegister.lastName = this.newRegisterFomGroup.get('lastName')?.value ?? '';
    newRegister.email = this.newRegisterFomGroup.get('email')?.value ?? '';
    newRegister.password = this.newRegisterFomGroup.get('password')?.value ?? '';
    newRegister.type = UserTypeEnum.TeamScout;

    return newRegister;
  }
}
