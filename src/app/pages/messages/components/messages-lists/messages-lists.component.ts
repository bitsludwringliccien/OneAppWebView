import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Message } from '../../../../core/interfaces/consumptions';


@Component({
  selector: 'app-messages-lists',
  templateUrl: './messages-lists.component.html',
  styleUrls: ['./messages-lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListsComponent implements OnInit {
  @Input() messages: Message[];

  constructor() { }

  ngOnInit() { }
}
