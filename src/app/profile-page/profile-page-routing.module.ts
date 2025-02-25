import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorProfileComponent } from './visitor-profile/visitor-profile.component';
import { CreatorProfileComponent } from './creator-profile/creator-profile.component';

const routes: Routes = [
  { path: 'visitor', component: VisitorProfileComponent},
  { path: 'creator', component: CreatorProfileComponent},
  { path: '',redirectTo: 'visitor', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule { }
