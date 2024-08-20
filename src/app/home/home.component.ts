import { Interface_Home, HomeService } from './home.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HOMETOWN } from '../home-town.service';
import { CommonModule } from '@angular/common';
import { HomeDetailComponent } from "../home-detail/home-detail.component";
import { log } from 'console';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, HomeDetailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  get_list_home_service: Interface_Home[] = [];
  title = 'Manage home';

  selectedHome? : Interface_Home;

  List_home = HOMETOWN;

  ngOnInit(): void{
    this.getHome();
  }

  onSelect(home: Interface_Home): void{
    this.selectedHome = home;
  }


  constructor(private homesevice : HomeService) {

  }

  getHome(): void {
    // this.home1 = this.homesevice.getHome();
    this.homesevice.getHome()
      .subscribe((list_home_service: Interface_Home[]) => {
        this.get_list_home_service = list_home_service
      });
    console.log(this.get_list_home_service);
    // ใช้subscribeในการรับข้อมูล
    
  }
}
