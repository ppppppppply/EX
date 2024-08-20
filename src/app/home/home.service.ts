
import { Injectable } from '@angular/core';
import { HOMETOWN } from '../home-town.service';
import { Observable, of } from 'rxjs';

export interface Interface_Home {
  home_code : number;
  home_name : string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getHome(): Observable<Interface_Home[]> {
    const list_home_service = of(HOMETOWN)
    return list_home_service
  }
  // Observableใช้ในการส่งค่าข้อมูล
  // ofใช้ในการสร้างObservableที่มีค่าอยู่แล้ว
}
