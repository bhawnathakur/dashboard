import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ComService {

  private _MessageSource = new Subject();

  constructor() { }
    Message$ = this._MessageSource.asObservable();
  sendMessage(message: any) {
    this._MessageSource.next(message);
  }

}
