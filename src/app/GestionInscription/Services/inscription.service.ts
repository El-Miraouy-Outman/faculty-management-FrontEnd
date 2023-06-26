import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {


  constructor(private http: HttpClient) { }

  getAllFilieres(): Observable<any[]> {
    const url = `${environment.apiInscription}/allFilieres`;
    return this.http.get<any[]>(url);
  }

  getFiliereById(filiereId: number): Observable<any> {
    const url = `${environment.apiInscription}/filier/${filiereId}`;
    return this.http.get<any>(url);
  }

  getAllInscriptions(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiInscription}/mst`);
  }

  getAllInscriptionsDEUST(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiInscription}/deust`);
  }

  getAllInscriptionsLST(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiInscription}/lst`);
  }

  getInscriptionById(inscriptionId: number): Observable<any> {
    return this.http.get<any>(`${environment.apiInscription}/${inscriptionId}`);
  }

  createInscription(inscriptionRequest: any): Observable<any> {
    return this.http.post<any>(`${environment.apiInscription}/mst`, inscriptionRequest);
  }

  createInscriptionDEUST(inscriptionRequest: any): Observable<any> {
    return this.http.post<any>(`${environment.apiInscription}/deust`, inscriptionRequest);
  }

  createInscriptionLST(inscriptionRequest: any): Observable<any> {
    return this.http.post<any>(`${environment.apiInscription}/lst`, inscriptionRequest);
  }

  updateInscription(inscriptionId: number, inscriptionRequest: any): Observable<any> {
    return this.http.put<any>(`${environment.apiInscription}/mst/${inscriptionId}`, inscriptionRequest);
  }

  updateInscriptionDEUST(inscriptionId: number, inscriptionRequest: any): Observable<any> {
    return this.http.put<any>(`${environment.apiInscription}/deust/${inscriptionId}`, inscriptionRequest);
  }

  updateInscriptionLST(inscriptionId: number, inscriptionRequest: any): Observable<any> {
    return this.http.put<any>(`${environment.apiInscription}/lst/${inscriptionId}`, inscriptionRequest);
  }

  deleteInscription(inscriptionId: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiInscription}/${inscriptionId}`);
  }

  getAllAcceptedInscriptions(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiInscription}/accept`);
  }

  getAllRejectedInscriptions(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiInscription}/reject`);
  }

  getAllCanceledInscriptions(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiInscription}/cancel`);
  }

  acceptInscription(inscriptionId: number): Observable<void> {
    return this.http.post<void>(`${environment.apiInscription}/${inscriptionId}/accept`, null);
  }

  rejectInscription(inscriptionId: number): Observable<any> {
    return this.http.post<any>(`${environment.apiInscription}/${inscriptionId}/reject`, null);
  }

  cancelInscription(inscriptionId: number): Observable<any> {
    return this.http.post<any>(`${environment.apiInscription}/${inscriptionId}/cancel`, null);
  }

  acceptInscriptionDEUST(number: number): Observable<void> {
    return this.http.post<void>(`${environment.apiInscription}/deust/accept/${number}`, null);
  }

  acceptInscriptionLST(number: number): Observable<void> {
    return this.http.post<void>(`${environment.apiInscription}/lst/accept/${number}`, null);
  }

  acceptInscriptionMST(number: number): Observable<void> {
    return this.http.post<void>(`${environment.apiInscription}/mst/accept/${number}`, null);
  }

  deleteAllRejectedInscriptions() {
    return this.http.delete(`${environment.apiInscription}/delreject`);
  }

  deleteAllCanceledInscriptions() {
    return this.http.delete(`${environment.apiInscription}/delcancel`);
  }
}
