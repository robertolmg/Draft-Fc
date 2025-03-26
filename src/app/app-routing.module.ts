// Angular Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { AuthGuard } from './theme/shared/_helpers/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/public/landing-page/landing-page.component').then((c) => c.LandingPageComponent)
      },
      {
        path: 'landing',
        loadComponent: () => import('./pages/public/landing-page/landing-page.component').then((c) => c.LandingPageComponent)
      },
      /*{
        path: 'maintenance',
        loadChildren: () => import('./demo/pages/maintenance/maintenance.module').then((m) => m.MaintenanceModule)
      },*/
      {
        path: 'login',
        loadComponent: () => import('./pages/public/login-page/login-page.component').then((c) => c.LoginPageComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/public/register-page/register-page.component').then((c) => c.RegisterPageComponent)
      }
      /*{
        path: 'contact-us',
        loadComponent: () => import('./demo/pages/contact-us/contact-us.component').then((c) => c.ContactUsComponent)
      },
      {
        path: 'faq',
        loadComponent: () => import('./demo/pages/faq/faq.component').then((c) => c.FaqComponent)
      },
      {
        path: 'private-policy',
        loadComponent: () => import('./demo/pages/prv-policy/prv-policy.component').then((c) => c.PrvPolicyComponent)
      }*/
    ]
  },
  {
    path: 'dashboard',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/private/dashboard/default/default.component').then((c) => c.DefaultComponent)
      }
    ]
  },
  {
    path: 'profile',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/private/profile/user-profile/user-profile.component').then((c) => c.UserProfileComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
