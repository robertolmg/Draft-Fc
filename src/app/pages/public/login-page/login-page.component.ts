// Angular import
import {Component, OnInit, effect, ViewContainerRef} from '@angular/core';
import {Router, RouterModule} from '@angular/router';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ThemeService } from 'src/app/theme/shared/service/theme.service';
import { LayoutConfig } from 'src/app/app-config';
import {AuthenticationService} from "../../../core/authentication/authentication.service";
import {LoginRequest} from "../../../shared/entities/authentication/LoginRequest";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { APPLICATION_ROUTES } from 'src/app/core/shared/enums';


@Component({
  selector: 'app-login-page',
  imports: [RouterModule, SharedModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {
  // public props
  themeMode!: boolean;
  loginFomGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  //  constructor
  constructor(private themeService: ThemeService,
              private router: Router,
              private authService: AuthenticationService,
              private viewContainer: ViewContainerRef) {
    effect(() => {
      this.isDarkTheme(this.themeService.isDarkTheme());
    });
  }

  // life cycle event
  ngOnInit() {
    this.themeMode = LayoutConfig.isDarkMode;
  }

  public Login(): void {
    this.authService.Login(this.CreateLoginAuthObject());
    this.router.navigate(['/dashboard'])
  }
    
  public Logout(): void {
    this.authService.Logout();
    this.router.navigate([APPLICATION_ROUTES.LOGIN]);
  }

  private CreateLoginAuthObject(): LoginRequest {
    const newRegister = new LoginRequest();
    newRegister.email = this.loginFomGroup.get("email")?.value ?? '';
    newRegister.password = this.loginFomGroup.get("password")?.value ?? '';

    return newRegister;
  }

  // private method
  private isDarkTheme(isDark: boolean) {
    this.themeMode = isDark;
  }
}
