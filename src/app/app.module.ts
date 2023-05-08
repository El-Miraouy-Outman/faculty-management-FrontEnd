import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddnoteComponent } from './GestionNote/Components/addnote/addnote.component';
import { ListenotesComponent } from './GestionNote/Components/listenotes/listenotes.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './GeneralComponents/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AddnoteComponent,
    ListenotesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    //FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
