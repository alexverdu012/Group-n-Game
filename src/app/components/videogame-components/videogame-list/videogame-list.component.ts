import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideogamesService } from '../../../entities/videogames/service/videogames.service';
import { Videogame } from '../../../entities/videogames/videogames.model';
@Component({
  selector: 'app-videogame-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videogame-list.component.html',
  styleUrl: './videogame-list.component.scss',
})
export class VideogameListComponent {
  videogameList?: Videogame[] = [];
  constructor(private videogamesService: VideogamesService) {
    videogamesService.getGames().then((res) => {
      const newGame = res.data.results;
      this.videogameList = newGame;
    });
  }

  validTag(tag: any): any {
    return tag == 'pc' || tag == 'playstation' || tag == 'xbox';
  }
}
