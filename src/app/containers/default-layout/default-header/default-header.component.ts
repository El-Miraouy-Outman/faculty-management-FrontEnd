import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import {environment} from "../../../../environments/environment";
import {AuthService} from "../../../login/serviceAuth/auth.service";

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  profile: string = "";

  constructor() {
    super();
  }


  protected readonly environment = environment;


  onLogout() {
    console.log("hello");
    environment.profileName=undefined;
    environment.isAuthenticated =false;
  }
}
