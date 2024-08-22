import { Injectable } from '@angular/core';
import { Interface_Home } from './components/home/home.service';

export const HOMETOWN: Interface_Home[] = [
  {home_code: 2, home_name: 'red_home', home_detail: 'บ้านหลังแรกเป็นบ้านสไตล์โมเดิร์นสองชั้น พื้นที่ใช้สอย 250 ตารางเมตร มี 4 ห้องนอน 3 ห้องน้ำ และที่จอดรถสำหรับ 2 คัน'},
  {home_code: 3, home_name: 'blue_home', home_detail: 'หลังที่สองเป็นบ้านทรงไทยประยุกต์ชั้นเดียว พื้นที่ใช้สอย 180 ตารางเมตร มี 3 ห้องนอน 2 ห้องน้ำ และที่จอดรถสำหรับ 1 คัน'},
  {home_code: 4, home_name: 'green_home', home_detail: ' หลังที่สามเป็นบ้านสไตล์คันทรี่สองชั้น พื้นที่ใช้สอย 220 ตารางเมตร มี 4 ห้องนอน 3 ห้องน้ำ และที่จอดรถสำหรับ 2 คัน'},
  {home_code: 5, home_name: 'pink_home', home_detail: 'หลังที่สี่เป็นบ้านสไตล์มินิมอลชั้นเดียว พื้นที่ใช้สอย 150 ตารางเมตร มี 2 ห้องนอน 2 ห้องน้ำ และที่จอดรถสำหรับ 1 คัน'},
  {home_code: 6, home_name: 'black_home', home_detail: 'หลังที่ห้าเป็นบ้านสไตล์ลอฟท์สองชั้น พื้นที่ใช้สอย 200 ตารางเมตร มี 3 ห้องนอน 3 ห้องน้ำ และที่จอดรถสำหรับ 2 คัน'},
  {home_code: 7, home_name: 'white_home', home_detail: 'หลังที่หกเป็นบ้านสไตล์ญี่ปุ่นชั้นเดียว พื้นที่ใช้สอย 170 ตารางเมตร มี 3 ห้องนอน 2 ห้องน้ำ และที่จอดรถสำหรับ 1 คัน'},
  {home_code: 8, home_name: 'gray_home', home_detail: 'หลังที่เจ็ดเป็นบ้านสไตล์คลาสสิคสองชั้น พื้นที่ใช้สอย 280 ตารางเมตร มี 5 ห้องนอน 4 ห้องน้ำ และที่จอดรถสำหรับ 2 คัน'},
  {home_code: 9, home_name: 'brown_home', home_detail: 'หลังที่แปดเป็นบ้านสไตล์โมร็อกโกชั้นเดียว พื้นที่ใช้สอย 160 ตารางเมตร มี 2 ห้องนอน 2 ห้องน้ำ และที่จอดรถสำหรับ 1 คัน'},
  {home_code: 10, home_name: 'purple_home', home_detail: 'หลังที่เก้าเป็นบ้านสไตล์สแกนดิเนเวียนสองชั้น พื้นที่ใช้สอย 210 ตารางเมตร มี 3 ห้องนอน 3 ห้องน้ำ และที่จอดรถสำหรับ 2 คัน'}
];


@Injectable({
  providedIn: 'root'
})
export class HomeTownService {

  constructor() { }
}
