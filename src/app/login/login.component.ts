import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string
  constructor(private data :DataService, private router: Router ) {
  
   }
  

  ngOnInit() {
    this.data.currentMessage.subscribe(username => this.username = username);

  }
  newMessage() {
    this.data.changeMessage(this.username);
    this.router.navigate(['/Home']); 
  }

}

