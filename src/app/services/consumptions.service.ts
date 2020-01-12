import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Consumptions } from '../core/interfaces/consumptions';
import { Line } from '../core/interfaces/line';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionsService {
  lineSelected = '3123901700';

  constructor(private http: HttpClient) { }

  getLines() {
    return this.http.get<Line[]>(`${environment.bLocal}/lines`).toPromise();
  }

  getConsumptionsById(id: string) {
    return this.http.get<Consumptions>(
      `${environment.bUrl}/api/v2/mobile/consumptions/${id}?_format=json`
      // `${environment.bLocal}/consumptions/${id}`
    ).toPromise();
  }
}
