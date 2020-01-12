import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from "@angular/core";
import { ToastController } from "@ionic/angular";
import * as moment from "moment";
import "moment/locale/es";
import { SelectedRange } from '../../../core/interfaces/selected-range';

moment.locale("es");
@Component({
  selector: "app-date-piker-start-end",
  template: `
    <ion-grid>
      <ion-row>
        <ion-col size="5">
          <div class="start">
            <ion-label>Desde</ion-label>
            <ion-datetime
              [value]="start"
              display-format="DD/MM/YYYY"
              cancel-text="Cancelar"
              done-text="Aceptar"
              [(ngModel)]="start"
            >
            </ion-datetime>
          </div>
        </ion-col>
        <ion-col size="5">
          <div class="end">
            <ion-label>Hasta</ion-label>
            <ion-datetime
              [value]="end"
              display-format="DD/MM/YYYY"
              cancel-text="Cancelar"
              done-text="Aceptar"
              [(ngModel)]="end"
            >
            </ion-datetime>
          </div>
        </ion-col>
        <ion-col size="2">
          <div class="action">
            <a (click)="sendRango()">VER</a>
          </div>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <div class="message">
            El rango de fechas no puede ser mayor a {{ rango }} dias
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>
  `,
  styles: [
    `
      .start {
        padding-left: 0px !important;
      }

      .end {
        padding-left: 0px !important;
      }

      .action {
        padding-top: 30px;
        margin: 0 auto;
      }

      .message {
        font-size: 12px;
        color: gray;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePikerStartEndComponent implements OnInit {
  start: string;
  end: string;
  @Input() rango: number = 15;
  @Output() selectedRange: EventEmitter<SelectedRange> = new EventEmitter<SelectedRange>();

  constructor(private toastController: ToastController) { }

  ngOnInit() {
    this.start = moment()
      .subtract(this.rango, "d")
      .format();
    this.end = moment().format();

    console.log(this.start);
    console.log(this.end);
  }

  async sendRango() {
    const diff = moment(this.end).diff(this.start, "days");
    if (diff > 15) {
      console.log("mayor");
      const toast = await this.toastController.create({
        message: `El Rango de fechas no puede ser mayor a ${this.rango} dias.`,
        color: "warning",
        duration: 3000
      });
      toast.present();
    } else {
      console.log("menor");
      this.selectedRange.emit({ "start": this.start, "end": this.end });
    }
  }
}
