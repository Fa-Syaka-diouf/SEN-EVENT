import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilEventsModule } from './acceuil-events/acceuil-events.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AutreComposantsModule } from './autre-composants/autre-composants.module';
import { PageEvenementModule } from './page-evenement/page-evenement.module';
import { PagesProfilModule } from './pages-profil/pages-profil.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AcceuilEventsModule,
    AuthenticationModule,
    AutreComposantsModule,
    PageEvenementModule,
    PagesProfilModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
