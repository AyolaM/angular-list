
import { Injectable } from '@angular/core';

export interface Employee {
  id: number;
  name: string;
  position: string;
}

@Injectable({
  providedIn: 'root'
})
export class TimecardTrackerService {

}
