import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MessagesPageRoutingModule } from "./messages-routing.module";

import { SharedModule } from "src/app/shared/shared.module";

import { MessagesPage } from "./messages.page";
import { MessagesCard } from "./components/messages-card/messages.card";
import { MessagesListsComponent } from "./components/messages-lists/messages-lists.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesPageRoutingModule,
    SharedModule
  ],
  declarations: [MessagesPage, MessagesCard, MessagesListsComponent]
})
export class MessagesPageModule {}
