import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
// import { TabBarComponent } from "./components/tab-bar/tab-bar.component";
// import { HeaderComponent } from "./components/header/header.component";
import { DatePikerStartEndComponent } from './components/date-piker-start-end/date-piker-start-end.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // TabBarComponent,
    // HeaderComponent,
     DatePikerStartEndComponent
    ],
  imports: [CommonModule, IonicModule, HttpClientModule, FormsModule],
  exports: [
    // TabBarComponent,
    // HeaderComponent,
    DatePikerStartEndComponent]
})
export class SharedModule {}
