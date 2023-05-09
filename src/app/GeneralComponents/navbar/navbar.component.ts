import { Component } from '@angular/core';
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {AddnoteComponent} from "../../GestionNote/Components/addnote/addnote.component";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  modalRef: MdbModalRef<AddnoteComponent> | null = null;
  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(AddnoteComponent)
  }
}
