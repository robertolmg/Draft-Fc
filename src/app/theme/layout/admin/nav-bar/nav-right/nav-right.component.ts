// Angular import
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

// project import
import { AuthenticationService } from 'src/app/theme/shared/service/authentication.service';
import { LayoutConfig } from 'src/app/app-config';
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party
import { TranslateService } from '@ngx-translate/core';
import screenfull from 'screenfull';

@Component({
    selector: 'app-nav-right',
    imports: [SharedModule, RouterModule],
    templateUrl: './nav-right.component.html',
    styleUrl: './nav-right.component.scss'
})
export class NavRightComponent implements OnInit {
  user?: null;
  screenFull: boolean = true;

  // constructor
  constructor(
    private authenticationService: AuthenticationService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.useLanguage(LayoutConfig.i18n);
    }, 0);
  }

  // user logout
  logout() {
    this.authenticationService.logout();
  }

  // user according language change of sidebar menu item
  useLanguage(language: string) {
    this.translate.use(language);
  }

  // public props
  componentSections = [
    {
      title: 'UI Components',
      items: [
        {
          title: 'Alerts',
          url: '/basic/alert'
        },
        {
          title: 'Accordions',
          url: '/basic/collapse'
        },
        {
          title: 'DropDown',
          url: '/basic/dropdowns'
        },
        {
          title: 'Badges',
          url: '/basic/badges'
        },
        {
          title: 'Breadcrumbs',
          url: '/basic/breadcrumb'
        }
      ]
    },
    {
      title: 'Application',
      items: [
        {
          title: 'Chat',
          url: '/chat'
        },
        {
          title: 'Kanban',
          url: '/kanban'
        },
        {
          title: 'Mail',
          url: '/mail'
        },
        {
          title: 'Calendar',
          url: '/calender'
        },
        {
          title: 'E-Commerce',
          url: '/ec/ec-product'
        }
      ]
    },
    {
      title: 'Components',
      items: [
        {
          title: 'Sweet Alert',
          url: '/advance/sweetAlert'
        },
        {
          title: 'Light Box',
          url: '/advance/lightbox'
        },
        {
          title: 'Modal',
          url: '/advance/modal'
        },
        {
          title: 'Notification',
          url: '/advance/notification'
        },
        {
          title: 'Tree View',
          url: '/advance/treeView'
        }
      ]
    }
  ];
  notification = [
    {
      images: 'assets/images/user/avatar-2.jpg',
      background: 'bg-light-success',
      icon: 'ti ti-building-store',
      title: 'John Doe',
      time: '2 min ago',
      text: 'It is a long established fact that a reader will be distracted',
      badgeType: true,
      mailType: false,
      imagesType: false,
      conformation: false,
      iconType: false
    },
    {
      images: 'assets/images/user/avatar-2.jpg',
      background: 'bg-light-success',
      icon: 'ti ti-building-store',
      title: 'Store Verification Done',
      time: '3 min ago',
      text: 'We have successfully received your request.',
      badgeType: true,
      mailType: false,
      imagesType: false,
      conformation: false,
      iconType: true
    },
    {
      images: 'assets/images/user/avatar-2.jpg',
      background: 'bg-light-primary',
      icon: 'ti ti-mailbox',
      title: 'Check Your Mail.',
      time: '5 min ago',
      text: "All done! Now check your inbox as you're in for a sweet treat!",
      badgeType: false,
      mailType: true,
      imagesType: false,
      conformation: false,
      iconType: true
    },
    {
      images: 'assets/images/user/avatar-2.jpg',
      background: 'bg-light-success',
      icon: 'ti ti-building-store',
      title: 'John Doe',
      time: '8 min ago',
      text: 'Uploaded two file on 21Jan 2020',
      badgeType: false,
      mailType: false,
      imagesType: true,
      conformation: false,
      iconType: false
    },
    {
      images: 'assets/images/user/avatar-3.jpg',
      background: 'bg-light-success',
      icon: 'ti ti-building-store',
      title: 'John Doe',
      time: '10 min ago',
      text: 'It is a long established fact that a reader will be distracted',
      badgeType: false,
      mailType: false,
      imagesType: false,
      conformation: true,
      iconType: false
    }
  ];

  // full screen toggle
  toggleFullscreen() {
    this.screenFull = screenfull.isFullscreen;
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  }
}
