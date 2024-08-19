import { Home } from './home.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'home';

  home: Home = {
    home_code: 1,
    home_name: 'orange_home'
  }
}
