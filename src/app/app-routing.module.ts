import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListenotesComponent} from "./component/notes/listenotes/listenotes.component";
import {AddnoteComponent} from "./component/notes/addnote/addnote.component";


const routes: Routes = [
  {path: "notes",component :ListenotesComponent},
  {path: "addNote",component :AddnoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
