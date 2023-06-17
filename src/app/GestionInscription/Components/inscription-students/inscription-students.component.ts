import { Component } from '@angular/core';
import { InscriptionService } from '../../Services/inscription.service';

@Component({
  selector: 'app-inscription-students',
  templateUrl: './inscription-students.component.html',
  styleUrls: ['./inscription-students.component.css']
})
export class InscriptionStudentsComponent {
  acceptedInscriptions: any[] = [];
  rejectedInscriptions: any[] = [];
  canceledInscriptions: any[] = [];
  currentTable: string = 'accepted'; // Default to 'accepted' table

  constructor(private inscriptionService: InscriptionService) {
    this.loadAcceptedInscriptions();
    this.loadRejectedInscriptions();
    this.loadCanceledInscriptions();
  }

  loadAcceptedInscriptions() {
    this.inscriptionService.getAllAcceptedInscriptions().subscribe(
      (inscriptions) => {
        this.acceptedInscriptions = inscriptions;
      },
      (error) => {
        console.log('Error retrieving accepted inscriptions:', error);
      }
    );
  }

  loadRejectedInscriptions() {
    this.inscriptionService.getAllRejectedInscriptions().subscribe(
      (inscriptions) => {
        this.rejectedInscriptions = inscriptions;
      },
      (error) => {
        console.log('Error retrieving rejected inscriptions:', error);
      }
    );
  }

  loadCanceledInscriptions() {
    this.inscriptionService.getAllCanceledInscriptions().subscribe(
      (inscriptions) => {
        this.canceledInscriptions = inscriptions;
      },
      (error) => {
        console.log('Error retrieving canceled inscriptions:', error);
      }
    );
  }

  deleteAllRejectedInscriptions() {
    this.inscriptionService.deleteAllRejectedInscriptions().subscribe(
      () => {
        this.loadRejectedInscriptions();
        console.log('All rejected inscriptions deleted successfully.');
      },
      (error) => {
        // Error handling
        console.log('An error occurred while deleting rejected inscriptions:', error);
      }
    );
  }

  deleteAllCanceledInscriptions() {
    this.inscriptionService.deleteAllCanceledInscriptions().subscribe(
      () => {
        this.loadCanceledInscriptions();
        console.log('All canceled inscriptions deleted successfully.');
      },
      (error) => {
        // Error handling
        console.log('An error occurred while deleting canceled inscriptions:', error);
      }
    );
  }

  showTable(table: string) {
    this.currentTable = table;
  }
}
