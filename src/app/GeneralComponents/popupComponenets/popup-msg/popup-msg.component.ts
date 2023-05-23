import {Component, Input, OnInit} from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-popup-msg',
  templateUrl: './popup-msg.component.html',
  styleUrls: ['./popup-msg.component.css']
})
export class PopupMsgComponent  implements OnInit{
  @Input() title: string | null = null;
  constructor(public Modal:MdbModalRef<PopupMsgComponent>) {
  }

  ngOnInit(): void {
    console.log(this.title)
  }

  onclose() {
    this.Modal.close(this.title)
  }
}
