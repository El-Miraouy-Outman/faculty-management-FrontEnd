import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import {SecurityService} from "../../../SecurityKeycloak/ServiceSec/security.service";

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";


  constructor(public securityService: SecurityService) {
    super();
  }


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
