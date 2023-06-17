import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListenotesComponent} from "./GestionNote/Components/listenotes/listenotes.component";
import {AddnoteComponent} from "./GestionNote/Components/addnote/addnote.component";
import {StudentsComponent} from "./GestionStudent/Components/students/students.component";
import {FilieresComponent} from "./GestionStudent/Components/filieres/filieres.component";
import {EditFiliereComponent} from "./GestionStudent/Components/filieres/edit-filiere/edit-filiere.component";

import { InscriptionStudentsComponent } from './GestionInscription/Components/inscription-students/inscription-students.component';
import { InscriptionComponent } from './GestionInscription/Components/inscription/inscription.component';
import { ListeinscriptionComponent } from './GestionInscription/Components/listeinscription/listeinscription.component';
import {ModulesComponent} from "./GestionStudent/Components/modules/modules.component";


const routes: Routes = [
  {path: "notes",component :ListenotesComponent
    /*, canActivate : [AuthGuard],data : {
      roles :['USER','ADMIN']
    }*/
  },
  {path: "addNote",component :AddnoteComponent
   /* , canActivate : [AuthGuard],data : {
      roles :['ADMIN','USER']
    }*/
  },
  {path : "etudiants", component : StudentsComponent},
  {path: "inscription",component : InscriptionComponent},
  {path: "listeinscription", component: ListeinscriptionComponent},
  {path: "inscription-students", component: InscriptionStudentsComponent},
  {path : "filieres", component : FilieresComponent},
  {path : "modules", component : ModulesComponent},
  {path : "editFiliere/:id", component : EditFiliereComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
