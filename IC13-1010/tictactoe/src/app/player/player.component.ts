import { Component } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  players: any;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getUsers().subscribe({
      next: (players) => {
        this.players = players;
        console.log(this.players);
      }
    });
}
  
}

