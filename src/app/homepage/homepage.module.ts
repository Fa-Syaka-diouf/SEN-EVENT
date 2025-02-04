import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomepageRoutingModule } from './homepage-routing.module';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ContactComponent } from '../shared/contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AboutComponent, HeaderComponent, PageAcceuilComponent], // Ajoutes les composantes dans cette declarations
  imports: [CommonModule, HomepageRoutingModule, SharedModule],
})
export class HomepageModule {}
