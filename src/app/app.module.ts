import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddnoteComponent } from './component/notes/addnote/addnote.component';
import { ListenotesComponent } from './component/notes/listenotes/listenotes.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './component/navbar/navbar/navbar.component';
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
    ReactiveFormsModule
    //FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
