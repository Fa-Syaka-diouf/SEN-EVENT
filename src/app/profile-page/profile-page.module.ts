import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { VisitorProfileComponent } from './visitor-profile/visitor-profile.component';
import { CreatorProfileComponent } from './creator-profile/creator-profile.component';


@NgModule({
  declarations: [
    VisitorProfileComponent,
    CreatorProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfilePageRoutingModule
  ]
})
export class ProfilePageModule { }
