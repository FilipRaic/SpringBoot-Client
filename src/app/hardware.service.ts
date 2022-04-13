import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Hardware} from "./hardware";
import {MockHardware} from "./mockHardware";

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  constructor() { }

  getHardware(): Observable<Hardware[]> {
    return of(MockHardware);
  }
}
