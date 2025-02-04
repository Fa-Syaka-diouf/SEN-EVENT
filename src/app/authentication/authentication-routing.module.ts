import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'create-account', component: CreateAccountComponent },
      { path: 'login', component: SeConnecterComponent },
      { path: '**', redirectTo: '/login' }, // Redirection pour les routes invalides
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
