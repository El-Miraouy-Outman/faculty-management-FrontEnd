import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddnoteComponent } from './GestionNote/Components/addnote/addnote.component';
import { ListenotesComponent } from './GestionNote/Components/listenotes/listenotes.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './GeneralComponents/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsComponent } from './GestionStudent/Components/students/students.component';
import { FilieresComponent } from './GestionStudent/Components/filieres/filieres.component';
import { ModulesComponent } from './GestionStudent/Components/modules/modules.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
// declancher keyclock
export  function kcFactory( keycloakService:KeycloakService){
  return ()=>{
    keycloakService.init({
      config : {
        realm : "note-realm",
        clientId : "note-client",
        url : "http://localhost:8080"
      },
      initOptions :{
        onLoad : "check-sso",
        checkLoginIframe : true
      }
    })
  }
}
@NgModule({
  declarations: [
    AppComponent,
    AddnoteComponent,
    ListenotesComponent,
    NavbarComponent,
    StudentsComponent,
    FilieresComponent,
    ModulesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide : APP_INITIALIZER,deps : [KeycloakService],useFactory :kcFactory,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
