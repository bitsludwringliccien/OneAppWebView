import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallsPageRoutingModule } from './calls-routing.module';

import { CallsPage } from './calls.page';
import { CallsCard } from './components/calls-card/calls.card';
import { CallsListsComponent } from './components/calls-lists/calls-lists.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallsPageRoutingModule,
    SharedModule
  ],
  declarations: [CallsPage, CallsCard, CallsListsComponent]
})
export class CallsPageModule {}
