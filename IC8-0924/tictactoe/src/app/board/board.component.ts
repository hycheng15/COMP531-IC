import { Component } from '@angular/core';

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
  headline: string = 'Player\'s turn: ';
  playerTurn: string = 'X';
  winner: boolean = false;

  /**
   * Handle the user selecting a square to put an X or an O.
   * @param id  The square id
   */
  handleBtnClick(id: number): void {
    // select this square if available
    if (this.boardStatus[id] === '') {
      //update board
      this.boardStatus[id] = this.playerTurn;
      // Check for winner
      this.checkWinner();
      if (this.winner) {
        this.headline = 'Winner: ';
      }
      else {
        //change player turn
        this.changePlayerTurn();
      }
    }
  }

  /**
   *  Alternate player turns.
   */
  changePlayerTurn(): void {
    if (this.playerTurn === 'X') {
      this.playerTurn = 'O';
    } else {
      this.playerTurn = 'X';
    }
  }

  checkWinner(): void {
    if (this.boardStatus[0] === this.playerTurn
      && this.boardStatus[1] === this.playerTurn
      && this.boardStatus[2] === this.playerTurn
      || this.boardStatus[3] === this.playerTurn
      && this.boardStatus[4] === this.playerTurn
      && this.boardStatus[5] === this.playerTurn
      || this.boardStatus[6] === this.playerTurn
      && this.boardStatus[7] === this.playerTurn
      && this.boardStatus[8] === this.playerTurn
      || this.boardStatus[0] === this.playerTurn
      && this.boardStatus[3] === this.playerTurn
      && this.boardStatus[6] === this.playerTurn
      || this.boardStatus[1] === this.playerTurn
      && this.boardStatus[4] === this.playerTurn
      && this.boardStatus[7] === this.playerTurn
      || this.boardStatus[2] === this.playerTurn
      && this.boardStatus[5] === this.playerTurn
      && this.boardStatus[8] === this.playerTurn) {
      this.winner = true;
    }
  }

}