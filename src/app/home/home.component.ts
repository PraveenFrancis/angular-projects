import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
username:string;
  constructor(private data:DataService ) {
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(username => this.username = username)
  }
  
}
