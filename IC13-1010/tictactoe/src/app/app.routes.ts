import { Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { RegisterComponent } from './register/register.component';
import { PlayerComponent } from './player/player.component';

export const routes: Routes = [{ path: 'board', component: BoardComponent },
                               { path: '', component: RegisterComponent }, 
                               {path: 'players', component: PlayerComponent}
];
