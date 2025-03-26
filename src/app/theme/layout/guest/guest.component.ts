// Angular import
import { Component, OnInit, OnDestroy } from '@angular/core';

// project import
import { LayoutConfig } from 'src/app/app-config';
import { ConfigurationComponent } from '../admin/configuration/configuration.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-guest',
    imports: [ConfigurationComponent, RouterModule],
    templateUrl: './guest.component.html',
    styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit, OnDestroy {
  // public props
  presetColor!: string;

  // Life cycle events
  ngOnInit(): void {
    this.presetColor = LayoutConfig.theme_color;
  }

  ngOnDestroy() {
    document.querySelector('body')?.classList.remove('landing-page');
  }
}
