import {Component} from '@angular/core';
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {FormBuilder} from "@angular/forms";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from "../../login/login.component";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    //public securityService: SecurityService
  private formBuilder : FormBuilder,
  private modal: NgbModal) {};

  login(row:any){
    console.log(row);
    const dialogRef = this.modal.open(LoginComponent, {
      size: "xl",
      backdrop: 'static',
      keyboard: false,
    });

    //console.log(data.operation)

  }


}
