
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
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
import { StudentsComponent } from './GestionStudent/Components/students/students.component';
import { FilieresComponent } from './GestionStudent/Components/filieres/filieres.component';
import { ModulesComponent } from './GestionStudent/Components/modules/modules.component';
import {UniquePipe} from "./GestionStudent/Pipes/unique.pipe";
import {PopupMsgComponent} from "./GeneralComponents/popupComponenets/popup-msg/popup-msg.component";
import {EditNoteComponent} from "./GestionNote/Components/edit-note/edit-note.component";
import {CdkDragPlaceholder} from "@angular/cdk/drag-drop";
import { EditFiliereComponent } from './GestionStudent/Components/filieres/edit-filiere/edit-filiere.component';
import { NavbarComponent } from './GeneralComponents/navbar/navbar.component';
import { AddnoteComponent } from './GestionNote/Components/addnote/addnote.component';
import { ListenotesComponent } from './GestionNote/Components/listenotes/listenotes.component';

import {DatePipe, NgOptimizedImage} from '@angular/common';
import { KeycloakAngularModule, KeycloakService } from "keycloak-angular";
import { InscriptionComponent } from './GestionInscription/Components/inscription/inscription.component';
import { ListeinscriptionComponent } from './GestionInscription/Components/listeinscription/listeinscription.component';
import { InscriptionStudentsComponent } from './GestionInscription/Components/inscription-students/inscription-students.component';
import { EditModuleComponent } from './GestionStudent/Components/modules/edit-module/edit-module.component';
import {ListeNoteEtudComponent} from "./GestionNote/Components/liste-note-etud/liste-note-etud.component";

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule
} from '@coreui/angular';
import {DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutComponent} from './containers';
import {NgScrollbarModule} from "ngx-scrollbar";
import {IconModule, IconSetService} from "@coreui/icons-angular";
import { CounterComponent } from './GeneralComponents/main/counter/counter.component';
import { HomeComponent } from './GeneralComponents/main/home/home.component';
import { MotDComponent } from './GeneralComponents/main/mot-d/mot-d.component';
import { DepComponent } from './GeneralComponents/main/dep/dep.component';
import { LoginComponent } from './login/login.component';
import {AppHttpInterceptor} from "./login/interceptors/app-http.interceptor";

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultLayoutComponent,
  DefaultHeaderComponent
];
// declancher keyclock



@NgModule({
  declarations: [
    ...APP_CONTAINERS,
    AppComponent,
    AddnoteComponent,
    ListenotesComponent,
    ListeNoteEtudComponent,
    NavbarComponent,
    StudentsComponent,
    FilieresComponent,
    ModulesComponent,
    UniquePipe,
    PopupMsgComponent,
    EditNoteComponent,
    EditFiliereComponent,
    InscriptionComponent,
    ListeinscriptionComponent,
    InscriptionStudentsComponent,
    EditModuleComponent,
    CounterComponent,
    HomeComponent,
    MotDComponent,
    DepComponent,
    LoginComponent,

    //ListeNoteEtudComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    NgScrollbarModule,
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

    MatDialogModule,
    CdkDragPlaceholder,
    KeycloakAngularModule,
    NgOptimizedImage,
  ],
  providers: [
    DatePipe,
    IconSetService,
    {provide : HTTP_INTERCEPTORS,useClass :AppHttpInterceptor,multi:true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
