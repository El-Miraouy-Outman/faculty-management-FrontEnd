import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from "mdb-angular-ui-kit/modal";
import { SecurityService } from "../../SecurityKeycloak/ServiceSec/security.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  modalRef: MdbModalRef<any> | null = null;
  modalAlertRef: MdbModalRef<any> | null = null;

  constructor( public  securityService: SecurityService ,private modalService: MdbModalService) {}



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

