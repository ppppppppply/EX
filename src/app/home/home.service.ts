import { MessageService } from './../message/message.service';
import { Injectable } from '@angular/core';
import { HOMETOWN } from '../home-town.service';
import { Observable, of } from 'rxjs';

export interface Interface_Home {
  home_code : number;
  home_name : string;
  home_detail : string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private messageservice: MessageService) { }

  getHome(): Observable<Interface_Home[]> {
    const list_home_service = of(HOMETOWN)
    this.messageservice.add('Homeservice: fetched home')
    return list_home_service
  }
  // Observableใช้ในการส่งค่าข้อมูล
  // ofใช้ในการสร้างObservableที่มีค่าอยู่แล้ว
}
