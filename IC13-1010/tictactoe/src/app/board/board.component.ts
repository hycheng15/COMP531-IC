import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  boardStatus: string[] = ['', '', '',
                           '', '', '',
                           '', '', ''];
  headline: string = '';
  playerTurn: string = 'X';
  winner: boolean = false;
  player1: string = '';
  player2: string = '';

  /**
   * Handle the user selecting a square to put an X or an O.
   * @param id  The square id
   */
  handleBtnClick(id: number): void {
    // select this square if available
    if (this.boardStatus[id] === '') {
      //update board
      this.boardStatus[id] = this.playerTurn;
      this.changePlayerTurn();
    }
  }

  /**
   *  Alternate player turns.
   */
  changePlayerTurn(): void {
    if (this.playerTurn === 'X') {
      this.playerTurn = 'O';
      this.headline = this.player2 + "'s turn";
    } else {
      this.playerTurn = 'X';
      this.headline = this.player1 + "'s turn";
    }
  }


  ngOnInit() {
    this.player1 = this.gServ.player1;
    this.player2 = this.gServ.player2;
    this.headline = this.player1 + "'s turn";
  }
  constructor(private gServ: GameService) {
  }
}