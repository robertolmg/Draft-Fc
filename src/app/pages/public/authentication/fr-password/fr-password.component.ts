// Angular import
import { Component, OnInit, effect } from '@angular/core';
import { RouterModule } from '@angular/router';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ThemeService } from 'src/app/theme/shared/service/theme.service';
import { LayoutConfig } from 'src/app/app-config';

@Component({
    selector: 'app-v3-fr-password',
    imports: [RouterModule, SharedModule],
    templateUrl: './fr-password.component.html',
    styleUrls: ['./fr-password.component.scss']
})
export class FrPasswordComponent implements OnInit {
  // public props
  themeMode!: boolean;

  //  constructor
  constructor(private themeService: ThemeService) {
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
}
