import { Component } from '@angular/core';
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {AddnoteComponent} from "../../GestionNote/Components/addnote/addnote.component";
import {SecurityService} from "../../SecurityKeycloak/ServiceSec/security.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  modalRef: MdbModalRef<AddnoteComponent> | null = null;
  constructor(public  securityService: SecurityService,private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(AddnoteComponent)
  }

  async  login() {
    console.log("heelo authh");
    await this.securityService.kcService.login({
      redirectUri : window.location.origin
    })
  }

  onLogout() {
    this.securityService.kcService.logout(window.location.origin)
  }
}
