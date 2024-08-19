import { Injectable } from '@angular/core';

export interface Home {
  home_code : number;
  home_name : string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }
}
