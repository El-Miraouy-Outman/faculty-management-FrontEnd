import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../../Services/inscription.service';

@Component({
  selector: 'app-listeinscription',
  templateUrl: './listeinscription.component.html',
  styleUrls: ['./listeinscription.component.css']
})
export class ListeinscriptionComponent implements OnInit {
  inscriptions: any[] = [];
  filteredInscriptions: any[] = [];
  filterTitle: string = "Liste des candidats en attente d'inscription";


  constructor(private inscriptionService: InscriptionService) { }

  ngOnInit() {
    this.loadAllInscriptions();
  }


  loadAllInscriptions() {
    this.inscriptionService.getAllInscriptions().subscribe(
      (data) => {
        this.inscriptions = data;
        this.filteredInscriptions = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  filterInscriptions(filter: string) {
    if (filter === 'MST') {
      this.filterTitle = "Les candidats pour Master (MST)";
      this.inscriptionService.getAllInscriptions().subscribe(
        (data) => {
          this.filteredInscriptions = data;
        },
        (error) => {
          console.log(error);
        }
      );
    } else if (filter === 'DEUST') {
      this.filterTitle = "Les candidats pour DEUST";
      this.inscriptionService.getAllInscriptionsDEUST().subscribe(
        (data) => {
          this.filteredInscriptions = data;
        },
        (error) => {
          console.log(error);
        }
      );
    } else if (filter === 'LST') {
      this.filterTitle = "Les candidats pour Licence (LST)";
      this.inscriptionService.getAllInscriptionsLST().subscribe(
        (data) => {
          this.filteredInscriptions = data;
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.filterTitle = "Liste des étudiants en attente d'inscription";
      this.filteredInscriptions = this.inscriptions;
    }
  }

  getEtatInscription(inscription: any): string {
    if (inscription.isAccepted) {
      return 'Acceptée';
    } else if (inscription.isRefused) {
      return 'Refusée';
    } else if (inscription.isCanceled) {
      return 'Annulée';
    } else {
      return 'En attente';
    }
  }

  acceptInscription(inscriptionId: number) {
    this.inscriptionService.acceptInscription(inscriptionId).subscribe(
      () => {
        this.loadAllInscriptions();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  rejectInscription(inscriptionId: number) {
    this.inscriptionService.rejectInscription(inscriptionId).subscribe(
      () => {
        this.loadAllInscriptions();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancelInscription(inscriptionId: number) {
    this.inscriptionService.cancelInscription(inscriptionId).subscribe(
      () => {
        this.loadAllInscriptions();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
