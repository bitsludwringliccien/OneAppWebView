import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from "@angular/core";
import { Call } from "src/app/core/interfaces/consumptions";

@Component({
  selector: "app-calls-lists",
  templateUrl: "./calls-lists.component.html",
  styleUrls: ["./calls-lists.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallsListsComponent implements OnInit, OnChanges {
  @Input() calls: Call[];
  @Input() loading: boolean;
  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    console.log('list', this.loading);

  }


}
