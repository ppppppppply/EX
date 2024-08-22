import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'EX';

  constructor(
    private router: Router
  ) { }

  show_button_HOME = true;
  show_button_BACK = false;

  move() {
    this.router.navigate(['/home']);
    console.log('go home');
    this.show_button_HOME = false;
    this.show_button_BACK = true;
  }

  goback() {
    this.router.navigate(['']);
    this.show_button_HOME = true;
    this.show_button_BACK = false;
  }
}
