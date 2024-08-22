import { MessageService } from '../message/message.service';
import { Interface_Home, HomeService } from './home.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HOMETOWN } from '../../home-town.service';
import { CommonModule } from '@angular/common';
import { MessageComponent } from "../message/message.component";
import { RouterModule } from '@angular/router';
import { HomeDetailComponent } from '../home-detail/home-detail.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, HomeDetailComponent, MessageComponent, RouterModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(
    private homesevice : HomeService,
    private messageservice : MessageService
  ) {

  }

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

  onAddMessage(home: Interface_Home): void{
    this.messageservice.add(`${home.home_detail}`)
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
