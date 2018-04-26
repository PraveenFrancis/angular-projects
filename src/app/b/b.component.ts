import { Component, OnInit } from '@angular/core';
import { DatatextService } from '../datatext.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  entertext:string
  constructor(private datatext:DatatextService) { }

  ngOnInit() {
    this.datatext.currentMessage.subscribe(entertext => this.entertext = entertext);

  }

}
