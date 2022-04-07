import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[] = [];
  gameName = '';
  gameYear = 0;

  addGame() {
    this.games.push(new Game(this.gameName, this.gameYear));
    this.gameName = '';
    this.gameYear = 0;

    localStorage.setItem('gamesAngular', JSON.stringify(this.games));
  }

  ngOnInit(): void {
    const existingGames = localStorage.getItem('gamesAngular');
    this.games = JSON.parse(existingGames as string) || [];
  }

}
