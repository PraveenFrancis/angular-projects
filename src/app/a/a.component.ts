import { Component, OnInit } from '@angular/core';
import {DatatextService} from '../datatext.service';
@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  entertext:string;
  constructor( private datatext:DatatextService) { }

  ngOnInit() {
    this.datatext.currentMessage.subscribe(entertext => this.entertext = entertext);

  }
  newMessage(){
    this.datatext.changeMessage(this.entertext);
  }

}
