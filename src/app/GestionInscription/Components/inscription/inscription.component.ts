import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { InscriptionService } from '../../Services/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  inscription: any = {}; // Declare an object to store form data
  filieres: any[] = []; // Declare an array to store filiere options
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private inscriptionService: InscriptionService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.inscriptionService.getAllFilieres().subscribe(
      (filieres: any[]) => {
        this.filieres = filieres;
        console.log('Filieres:', this.filieres); // Log the fetched filieres
      },
      (error) => {
        console.error('Error fetching filieres:', error);
      }
    );
  }

  submitForm() {
    // Format the date using DatePipe
    const formattedDate = this.datePipe.transform(this.inscription.dateNaissance, 'yyyy-MM-ddTHH:mm:ss.SSSZ');
    this.inscription.dateNaissance = formattedDate; // Update the formatted date in the inscription object

    this.inscriptionService.createInscription(this.inscription).subscribe(
      () => {
        console.log('Inscription created successfully');
        this.successMessage = 'Votre candidature est enregistrée, et elle est en cours de traitement';
        this.inscription = {}; // Reset the form data after successful submission

        // Clear success message after 10 seconds
        setTimeout(() => {
          this.successMessage = '';
        }, 10000);
      },
      (error) => {
        console.log(this.inscription);
        console.error('Error creating inscription:', error);
        if (error.error && error.error.message) {
          console.error('Error message from server:', error.error.message);
          this.errorMessage = 'Une erreur s\'est produite lors de la soumission du formulaire. Veuillez réessayer.';

          // Clear error message after 10 seconds
          setTimeout(() => {
            this.errorMessage = '';
          }, 10000);
        }
      }
    );
  }
}
