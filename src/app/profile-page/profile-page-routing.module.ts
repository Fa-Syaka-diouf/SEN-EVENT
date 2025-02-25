import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageModule } from './profile-page.module';
import { ProfilesPageComponent } from './profile-pages/profile-page.component';
import { OrganisateurComponent } from './organisateur/organisateur.component';
import { Profil2Component } from './profil2/profil2.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilesPageComponent,
    children: [
      { path: 'organisateur', component: OrganisateurComponent },
      { path: '', component: Profil2Component },
      { path: '**', redirectTo: '/profile' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
