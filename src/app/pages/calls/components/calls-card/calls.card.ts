import { Component, OnInit } from '@angular/core';


import { ConsumptionsService } from '../../../../services/consumptions.service';
import { Call } from '../../../../core/interfaces/consumptions';
import { SelectedRange } from '../../../../core/interfaces/selected-range';

@Component({
  selector: 'app-calls-card',
  templateUrl: './calls.card.html',
  styleUrls: ['./calls.card.scss']
})
export class CallsCard implements OnInit {
  calls: Call[];
  loading = true;
  loadingList = false;

  constructor(private consumptionsService: ConsumptionsService) { }

  ngOnInit() {
    this.getCalls();
  }

  async getCalls() {
    this.loadingList = true;
    console.log('loadingList', this.loadingList);
    const id = this.consumptionsService.lineSelected;
    await this.consumptionsService.getConsumptionsById(id) //.toPromise()
      .then(consumos => {
        console.log(consumos.data.calls);
        this.calls = consumos.data.calls;
        this.loading = false;
        console.log('loading', this.loading);

        this.loadingList = false;
        console.log('loadingList', this.loadingList);

      });
    console.log('get');

  }

  async filterRange(selectedRange: SelectedRange) {
    console.log('llamadas', selectedRange);
    await this.getCalls();
    const newCalls = this.calls.filter(call => {
      console.log('inicial', call.eventDateTime, selectedRange.start, 'final', call.eventDateTime, selectedRange.end);
      console.log('inicial', Date.parse(call.eventDateTime) >= Date.parse(selectedRange.start), 'final', Date.parse(call.eventDateTime) <= Date.parse(selectedRange.end));

      return Date.parse(call.eventDateTime) >= Date.parse(selectedRange.start)
        && Date.parse(call.eventDateTime) <= Date.parse(selectedRange.end)
    });
    console.log(newCalls);
    this.calls = newCalls;

  }


}
