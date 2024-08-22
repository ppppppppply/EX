import { Component,Input } from '@angular/core';
import { Interface_Home } from '../home/home.service'
import { HOMETOWN } from '../../home-town.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home-detail',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home-detail.component.html',
  styleUrl: './home-detail.component.css'
})
export class HomeDetailComponent {
  @Input() Input_home?: Interface_Home;

  List_home = HOMETOWN;
  selectedHome? : Interface_Home;
}
