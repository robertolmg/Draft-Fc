// angular import
import { Component, OnDestroy, OnInit, ViewEncapsulation, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// project import
import { LayoutConfig } from 'src/app/app-config';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ThemeService } from 'src/app/theme/shared/service/theme.service';
import { PlaceholderCard1Component } from 'src/app/theme/shared/components/placeholder-card/placeholder-1.component';
import { PlaceholderCard2Component } from 'src/app/theme/shared/components/placeholder-card/placeholder-2.component';

// third party
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

// rxjs
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, SharedModule, RouterModule, CarouselModule, PlaceholderCard1Component, PlaceholderCard2Component],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit, OnDestroy {
  // public props
  landingLayout!: boolean;
  isCollapsed = true;
  themeMode!: boolean;
  themeDark = new Subscription();
  themeRtl = new Subscription();
  color = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-info', 'bg-danger', 'bg-warning'];
  customOptions!: OwlOptions;
  frameworkOptions!: OwlOptions;

  // constructor
  constructor(private themeService: ThemeService) {
    effect(() => {
      this.isDarkTheme(this.themeService.isDarkTheme());
      this.themeDirection(this.themeService.isRtlTheme());
    });
  }

  // Life cycle events
  ngOnInit(): void {
    this.customOptions = {
      merge: true,
      loop: true,
      margin: 16,
      center: true,
      dots: false,
      autoplay: true,
      nav: true,
      rtl: false,
      autoplayHoverPause: true,
      navText: ['<i class="ti ti-chevron-left"></i>', '<i class="ti ti-chevron-right"></i>'],
      autoplayTimeout: 2000,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        600: {
          items: 1.7
        },
        1440: {
          items: 1.2,
          margin: 10
        }
      }
    };
    this.frameworkOptions = {
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 2
        },
        400: {
          items: 2
        },
        470: {
          items: 3
        },
        600: {
          items: 4
        },
        1024: {
          items: 5
        },
        1440: {
          items: 7
        }
      }
    };
    this.themeMode = LayoutConfig.isDarkMode;
    this.landingLayout = LayoutConfig.isLanding;
    document.querySelector('body')?.classList.add('landing-page');
    let ost = 0;
    document.addEventListener('scroll', function () {
      const cOst = document.documentElement.scrollTop;
      if (cOst == 0) {
        document.querySelector('.navbar')?.classList.add('top-nav-collapse');
      } else if (cOst > ost) {
        document.querySelector('.navbar')?.classList.add('top-nav-collapse');
        document.querySelector('.navbar')?.classList.remove('default');
      } else {
        document.querySelector('.navbar')?.classList.add('default');
        document.querySelector('.navbar')?.classList.remove('top-nav-collapse');
      }
      ost = cOst;
    });
  }

  ngOnDestroy() {
    document.querySelector('body')?.classList.remove('landing-page');
    this.themeRtl.unsubscribe();
  }

  // private methods
  private isDarkTheme(isDark: boolean) {
    this.themeMode = isDark;
  }
  private themeDirection(isRtl: boolean) {
    this.customOptions = { ...this.customOptions, rtl: isRtl };
    this.frameworkOptions = { ...this.frameworkOptions, rtl: isRtl };
  }

  cardList = [
    {
      background: 'bg-yellow-200',
      icon_style: 'grid-icon text-yellow-200',
      rotate: 'rotate',
      title: '150+',
      subText: 'Components',
      icon: 'ti ti-layout-grid',
      text_style: 'align-items-center'
    },
    {
      background: 'bg-blue-200',
      icon_style: 'grid-icon text-primary',
      title: '8+',
      subText: 'Application',
      icon: 'ti ti-layout-grid-add',
      text_style: 'align-items-end'
    },
    {
      background: 'bg-purple-200',
      icon_style: 'grid-icon text-purple-500',
      title: '100+',
      subText: 'Pages',
      icon: 'ti ti-table',
      text_style: 'align-items-end'
    }
  ];

  experience = [
    {
      text: 'A straightforward and simple folder structure.'
    },
    {
      text: 'Code that is organized in a clear and logical manner.'
    },
    {
      text: 'Setting up Typography and Color schemes is easy and effortless.'
    },
    {
      text: 'Multiple layout options that can be easily adjusted.'
    },
    {
      text: 'A theme that can be easily configured on a single page.'
    }
  ];

  figma = [
    {
      text: 'Professional Kit for Designer'
    },
    {
      text: 'Properly Organised Pages'
    },
    {
      text: 'Dark/Light Design'
    },
    {
      text: '*Figma file included only in Plus & Extended Licenses.'
    },
    {
      text: 'A theme that can be easily configured on a single page.'
    }
  ];

  offers = [
    {
      image: 'assets/images/landing/offer/offer-1.png',
      name: 'Beautiful User Interface',
      text: 'Berry can improve the user experience of your web application by providing a clear and intuitive layout, and consistent look and feel.'
    },
    {
      image: 'assets/images/landing/offer/offer-2.png',
      name: 'Time and Cost Savings',
      text: 'Berry can save developers time and effort by providing a pre-built user interface, allowing them to focus on other aspects of the project.'
    },
    {
      image: 'assets/images/landing/offer/offer-3.png',
      name: 'Reduce Development Complexity',
      text: 'Berry simplifies admin panel development with easy theme setup and clear code with flexible layouts options.'
    },
    {
      image: 'assets/images/landing/offer/offer-4.png',
      name: 'Improved Scalability',
      text: 'Berry uses scalable technologies and resources to ensure that your admin panel remains efficient and effective as your needs.'
    },
    {
      image: 'assets/images/landing/offer/offer-5.png',
      name: 'Well-Documented and Supported',
      text: 'With a range of resources including user guides, tutorials, and FAQs to help users understand and effectively use the Berry.'
    },
    {
      image: 'assets/images/landing/offer/offer-6.png',
      name: 'Performance Centric',
      text: 'Berry is a performance-centric dashboard template that is designed to deliver optimal performance for your admin panel.'
    }
  ];

  testamentsCards = [
    {
      image: 'assets/images/user/avatar-1.jpg',
      support_type: '@Quality Support',
      name: 'Nelu',
      review:
          'This is a quality team with quality support. Number of available modules is incredible. Anytime I thought "oh I wish it had this" I was able to find exactly that already pre-made in the template.'
    },
    {
      image: 'assets/images/user/avatar-2.jpg',
      support_type: '@Code Quality',
      name: 'Bente',
      review:
          'Very good customer service! I liked the design and there was nothing wrong, but found out after testing that it did not quite match the functionality and overall design that I needed for my type of software. I therefore contacted customer service and it was no problem even though the deadline for refund had actually expired.'
    },
    {
      image: 'assets/images/user/avatar-3.jpg',
      support_type: '@Codebase',
      name: 'William',
      review:
          'One of the better themes I have used. Beautiful and clean design. Also included a NextJS project. Ultimately it didnt work out for my specific use case, but this is a well organized theme. Definitely keeping it in mind for future projects.'
    },
    {
      image: 'assets/images/user/avatar-4.jpg',
      support_type: '@Customizability',
      name: 'Besart',
      review:
          'Very well written code and good structure. Very customizable and tons of nice components. Good documentation. Team is very responsive too'
    },
    {
      image: 'assets/images/user/avatar-5.jpg',
      support_type: '@Quality Support',
      name: 'Dillon',
      review:
          'The project template is great, as well as the codebase. I am a backend developer, new to frontend and learning. So this template is turning out to be a great foundation...'
    },
    {
      image: 'assets/images/user/avatar-6.jpg',
      support_type: '@Well Written',
      name: 'Jean',
      review: 'Very well written. I use it as a base for completely rewriting our existing apps front end.'
    },
    {
      image: 'assets/images/user/avatar-7.jpg',
      support_type: '@Codebase',
      name: 'Nelu',
      review:
          'This is a quality team with quality support. Number of available modules is incredible. Anytime I thought "oh I wish it had this" I was able to find exactly that already pre-made in the template.'
    },
    {
      image: 'assets/images/user/avatar-8.jpg',
      support_type: '@Customer Support',
      name: 'Bente',
      review:
          'Very good customer service! I liked the design and there was nothing wrong, but found out after testing that it did not quite match the functionality and overall design that I needed for my type of software. I therefore contacted customer service and it was no problem even though the deadline for refund had actually expired.'
    },
    {
      image: 'assets/images/user/avatar-9.jpg',
      support_type: '@Customer Support',
      name: 'William',
      review:
          'One of the better themes I have used. Beautiful and clean design. Also included a NextJS project. Ultimately it didnt work out for my specific use case, but this is a well organized theme. Definitely keeping it in mind for future projects.'
    }
  ];

  startupList = [
    {
      title: 'Easy Customizability'
    },
    {
      title: 'Highly Responsive'
    },
    {
      title: 'Design Consistency'
    },
    {
      title: 'Effective Support'
    },
    {
      title: 'Standardization'
    },
    {
      title: 'Compatibility'
    },
    {
      title: 'Easy Customizability'
    },
    {
      title: 'Highly Responsive'
    },
    {
      title: 'Design Consistency'
    },
    {
      title: 'Effective Support'
    },
    {
      title: 'Standardization'
    },
    {
      title: 'Compatibility'
    }
  ];

  dashboardList = [
    {
      image: 'assets/images/landing/pre-apps/slider-light-1.png',
      darkImage: 'assets/images/landing/pre-apps/slider-dark-1.png',
      link: '/ec/ec-product',
      name: 'Ecommerce App'
    },
    {
      image: 'assets/images/landing/pre-apps/slider-light-2.png',
      darkImage: 'assets/images/landing/pre-apps/slider-dark-2.png',
      link: '/calender',
      name: 'Calendar App'
    },
    {
      image: 'assets/images/landing/pre-apps/slider-light-3.png',
      darkImage: 'assets/images/landing/pre-apps/slider-dark-3.png',
      link: '/chat',
      name: 'Chat App'
    },
    {
      image: 'assets/images/landing/pre-apps/slider-light-4.png',
      darkImage: 'assets/images/landing/pre-apps/slider-dark-4.png',
      link: '/kanban',
      name: 'Kanban App'
    },
    {
      image: 'assets/images/landing/pre-apps/slider-light-5.png',
      darkImage: 'assets/images/landing/pre-apps/slider-dark-5.png',
      link: '/mail',
      name: 'Mail/Message App'
    },
    {
      image: 'assets/images/landing/pre-apps/slider-light-6.png',
      darkImage: 'assets/images/landing/pre-apps/slider-dark-6.png',
      link: '/user/social-profile',
      name: 'Social Profile'
    }
  ];

  frameworkList = [
    {
      image: 'assets/images/landing/frameworks/bootstrap.svg',
      alt: 'bootstrap',
      name: 'Bootstrap 5',
      link: 'https://links.codedthemes.com/VpESi'
    },
    {
      image: 'assets/images/landing/frameworks/react.svg',
      alt: 'react',
      name: 'React',
      link: 'https://codedthemes.com/item/berry-material-react-admin-template/'
    },
    {
      image: 'assets/images/landing/frameworks/codeigniter.svg',
      alt: 'CodeIgniter',
      name: 'CodeIgniter',
      link: 'https://links.codedthemes.com/AdRiB'
    },
    {
      image: 'assets/images/landing/frameworks/dot-net.svg',
      alt: '.net',
      name: '.Net',
      link: 'https://links.codedthemes.com/wkQEu'
    },
    {
      image: 'assets/images/landing/frameworks/vue.svg',
      alt: 'Vuetify 3',
      name: 'Vuetify 3',
      link: 'https://links.codedthemes.com/RqhwV'
    },
    {
      image: 'assets/images/landing/frameworks/shopify.svg',
      alt: 'shopify',
      name: 'Shopify',
      link: 'javascript:',
      isUpcoming: true
    },
    {
      image: 'assets/images/landing/frameworks/full-stack.svg',
      alt: 'Full-Stack',
      name: 'Full Stack',
      link: 'https://links.codedthemes.com/quhuG'
    },
    {
      image: 'assets/images/landing/frameworks/django.svg',
      alt: 'Django',
      name: 'Django',
      link: 'https://links.codedthemes.com/Wfbiy'
    },
    {
      image: 'assets/images/landing/frameworks/flask.svg',
      alt: 'Flask',
      name: 'Flask',
      link: 'https://links.codedthemes.com/quhuG'
    }
  ];
}
