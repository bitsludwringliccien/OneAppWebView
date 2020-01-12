import { Component, OnInit } from '@angular/core';


import { ConsumptionsService } from '../../../../services/consumptions.service';
import { Message } from '../../../../core/interfaces/consumptions';
import { SelectedRange } from '../../../../core/interfaces/selected-range';

@Component({
  selector: 'app-messages-card',
  templateUrl: './messages.card.html',
  styleUrls: ['./messages.card.scss']
})
export class MessagesCard implements OnInit {
  messages: Message[];

  constructor(private consumptionsService: ConsumptionsService) { }

  ngOnInit() {
    this.getMessages()
  }

  async getMessages() {
    const id = this.consumptionsService.lineSelected;
    await this.consumptionsService.getConsumptionsById(id) //.toPromise()
      .then(consumos => {
        console.log(consumos);
        this.messages = consumos.data.messages;
      });
  }


  async filterRange(selectedRange: SelectedRange) {
    console.log('mensages', selectedRange);
    await this.getMessages();
    let newMessages = this.messages.filter(message => {
      console.log('inicial', message.eventDateTime, selectedRange.start, 'final', message.eventDateTime, selectedRange.end);
      console.log('inicial', Date.parse(message.eventDateTime) >= Date.parse(selectedRange.start), 'final', Date.parse(message.eventDateTime) <= Date.parse(selectedRange.end));

      return Date.parse(message.eventDateTime) >= Date.parse(selectedRange.start) && Date.parse(message.eventDateTime) <= Date.parse(selectedRange.end)
    });
    console.log(newMessages);
    this.messages = newMessages;

  }
}
