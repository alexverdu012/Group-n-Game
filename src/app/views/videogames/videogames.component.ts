import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideogameListComponent } from '../../components/videogame-components/videogame-list/videogame-list.component';
@Component({
  selector: 'app-videogames',
  standalone: true,
  imports: [CommonModule, VideogameListComponent],
  templateUrl: './videogames.component.html',
  styleUrl: './videogames.component.scss',
})
export class VideogamesComponent {}
