import { Home } from './home.service';
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
  title = 'home';

  home: Home = {
    home_code: 1,
    home_name: 'orange_home'
  }

  homes = HOMETOWN;
}
