import { NavbarComponent } from './../shared/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEventRoutingModule } from './create-event-routing.module';
import { EditerComponent } from './editer/editer.component';
import { BanniereComponent } from './banniere/banniere.component';
import { TicketComponent } from './ticket/ticket.component';
import { ReviserComponent } from './reviser/reviser.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { share } from 'rxjs';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EditerComponent,
    BanniereComponent,
    TicketComponent,
    ReviserComponent,
    CreateEventComponent,
  ],
  imports: [CommonModule, CreateEventRoutingModule, SharedModule],
})
export class CreateEventModule {}
