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
import {EditModuleComponent} from "./GestionStudent/Components/modules/edit-module/edit-module.component";
import {ListeNoteEtudComponent} from "./GestionNote/Components/liste-note-etud/liste-note-etud.component";
import {DefaultLayoutComponent} from "./containers";
import {HomeComponent} from "./GeneralComponents/main/home/home.component";
import {CounterComponent} from "./GeneralComponents/main/counter/counter.component";
import {MotDComponent} from "./GeneralComponents/main/mot-d/mot-d.component";
import {DepComponent} from "./GeneralComponents/main/dep/dep.component";
import {LoginComponent} from "./login/login.component";
import {authenticationGuard} from "./guards/authentication.guard";


const routes: Routes = [
     {path : "login" , component : LoginComponent},
     {path : '' , component : HomeComponent},
     {path : 'chiffres' , component : CounterComponent},
     {path : 'mot' ,component : MotDComponent},
     {path : 'deparetement' ,component : DepComponent},


      {path: "notes",component :ListenotesComponent
        , canActivate : [authenticationGuard],data : {
          roles :['ADMIN']
        }
      },
      {path: "addNote",component :AddnoteComponent
        /*, canActivate : [AuthGuard],data : {
          roles :['ADMIN']
        }*/
      },
      {path : "etudiants", component : StudentsComponent
        /*, canActivate : [AuthGuard],data : {
          roles :['ADMIN']
        }*/
        },
      {path: "inscription",component : InscriptionComponent},
      {path: "listeinscription", component: ListeinscriptionComponent
        /*, canActivate : [AuthGuard],data : {
          roles :['ADMIN']
        }*/
        },
      {path: "inscription-students", component: InscriptionStudentsComponent
        /*, canActivate : [AuthGuard],data : {
          roles :['ADMIN']
        }*/
        },
      {path : "filieres", component : FilieresComponent},
      {path : "modules", component : ModulesComponent},
      {path : "editFiliere/:id", component : EditFiliereComponent
        /*, canActivate : [AuthGuard],data : {
          roles :['ADMIN']
        }*/
        },
      {path : "editModule/:id", component : EditModuleComponent
        /*, canActivate : [AuthGuard],data : {
          roles :['ADMIN']
        }*/
        },
      {path: "notesEtd",component : ListeNoteEtudComponent
        /*, canActivate : [AuthGuard],data : {
          roles :['USER','ADMIN','user']
        }*/
        },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
