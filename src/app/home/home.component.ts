import { Interface_Home } from './home.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HOMETOWN } from '../home-town.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Manage home';

  selectedHome? : Interface_Home;

  List_home = HOMETOWN;

  ngOnInit(): void{
  }

  onSelect(home: Interface_Home): void{
    this.selectedHome = home;
  }
}
