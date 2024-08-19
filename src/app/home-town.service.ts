import { Injectable } from '@angular/core';
import { Home } from './home/home.service';

export const HOMETOWN: Home[] = [
  {home_code: 2, home_name: 'red_home'},
  {home_code: 3, home_name: 'blue_home'},
  {home_code: 4, home_name: 'green_home'},
  {home_code: 5, home_name: 'pink_home'},
  {home_code: 6, home_name: 'black_home'},
  {home_code: 7, home_name: 'white_home'},
  {home_code: 8, home_name: 'gray_home'},
  {home_code: 9, home_name: 'brown_home'},
  {home_code: 10, home_name: 'purple_home'}
];


@Injectable({
  providedIn: 'root'
})
export class HomeTownService {

  constructor() { }
}
