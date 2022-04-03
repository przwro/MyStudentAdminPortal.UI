import { Component } from '@angular/core';
import { Game } from './models/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentadminportal-ui';

  games: Game[] = [];
  gameName = '';
  gameYear = 0;

  addGame() {
    this.games.push(new Game(this.gameName, this.gameYear));
    this.gameName = '';
    this.gameYear = 0;

    localStorage.setItem('gamesAngular',
    JSON.stringify(this.games));
  }

  ngOnInit() {
    const existingGames = localStorage.getItem('gamesAngular');
    this.games = JSON.parse(existingGames as string) || [];
  }
}
