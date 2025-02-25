import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfilesPageComponent } from './profile-pages/profile-page.component';
import { OrganisateurComponent } from './organisateur/organisateur.component';
import { Profil2Component } from './profil2/profil2.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProfilesPageComponent],
  imports: [
    CommonModule,
    ProfilePageRoutingModule,
    Profil2Component,
    OrganisateurComponent,
    SharedModule,
  ],
})
export class ProfilePageModule {}
