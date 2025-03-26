// Angular Import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Router } from '@angular/router';

@Component({
    selector: 'app-default',
    imports: [CommonModule, SharedModule],
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss']
})
export class DefaultComponent {

  public constructor(private router: Router) {

  }

  public redirectToProfilePage() : void {
    this.router.navigate(['/profile']);
  }
}
