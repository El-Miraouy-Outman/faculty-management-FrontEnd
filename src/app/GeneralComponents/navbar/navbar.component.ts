import {Component} from '@angular/core';
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {SecurityService} from "../../SecurityKeycloak/ServiceSec/security.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public securityService: SecurityService) {
  };


  async login() {
    console.log("heelo authh");
    await this.securityService.kcService.login({
      redirectUri: window.location.origin
    })
  }

  async onLogout() {
    this.securityService.kcService.logout(window.location.origin)
  }
}
