// Angular import
import { Component, OnInit, effect } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ThemeService } from 'src/app/theme/shared/service/theme.service';
import { LayoutConfig } from 'src/app/app-config';

@Component({
    selector: 'app-v3-check-mail',
    imports: [SharedModule],
    templateUrl: './check-mail.component.html',
    styleUrls: ['./check-mail.component.scss']
})
export class CheckMailComponent implements OnInit {
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
