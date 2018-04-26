import { Injectable, } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DatatextService {


  private messageSource = new BehaviorSubject<string>("");
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(entertext: string) {
    this.messageSource.next(entertext)
  }

}