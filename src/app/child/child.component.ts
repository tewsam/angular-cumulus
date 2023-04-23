import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  tewchannel="youtube.com/tewtew"

  constructor() { }

  ngOnInit(): void {
  }
@Output()
  sendMsgEmitter= new EventEmitter();
  sendMsgToParent(e){
    this.sendMsgEmitter.emit(e.target.value);
  }

}
