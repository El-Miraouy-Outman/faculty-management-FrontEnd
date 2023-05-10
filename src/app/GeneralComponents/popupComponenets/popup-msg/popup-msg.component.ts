import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-popup-msg',
  templateUrl: './popup-msg.component.html',
  styleUrls: ['./popup-msg.component.css']
})
export class PopupMsgComponent  implements OnInit{
  @Input() title: string | null = null;
  constructor() {
  }

  ngOnInit(): void {
  }

}
