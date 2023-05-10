import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListenotesComponent} from "./GestionNote/Components/listenotes/listenotes.component";
import {AddnoteComponent} from "./GestionNote/Components/addnote/addnote.component";
import {StudentsComponent} from "./GestionStudent/Components/students/students.component";


const routes: Routes = [
  {path: "notes",component :ListenotesComponent},
  {path: "addNote",component :AddnoteComponent},
  {path : "etudiants", component : StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
