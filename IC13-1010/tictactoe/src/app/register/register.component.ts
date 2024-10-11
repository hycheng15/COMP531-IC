import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {GameService} from "../game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //regForm: FormGroup;
  headline: string;

  regForm = new FormGroup({
    uname1: new FormControl(''),
    uname2: new FormControl(''),
  })

  ngOnInit(): void {
      
  }

  onSubmit() {
    console.log(this.regForm.value.uname1);
    console.log(this.regForm.value.uname2);

    this.gServ.player1 = this.regForm.value.uname1 as string;
    this.gServ.player2 = this.regForm.value.uname2 as string;
    this.router.navigate(['/board']);
  }

  constructor(private gServ: GameService, private router: Router) {
    //this.regForm = ...
    this.headline = "";
  }
  
}