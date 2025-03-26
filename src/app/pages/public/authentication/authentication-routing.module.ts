// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'forgetPassword',
        loadComponent: () => import('./fr-password/fr-password.component').then((c) => c.FrPasswordComponent)
      },
      {
        path: 'checkMail',
        loadComponent: () => import('./check-mail/check-mail.component').then((c) => c.CheckMailComponent)
      },
      {
        path: 'resetPassword',
        loadComponent: () => import('./reset-password/reset-password.component').then((c) => c.ResetPasswordComponent)
      },
      {
        path: 'codeVerification',
        loadComponent: () => import('./code-verify/code-verify.component').then((c) => c.CodeVerifyComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
