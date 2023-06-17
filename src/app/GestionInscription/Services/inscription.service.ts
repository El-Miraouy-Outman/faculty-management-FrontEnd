import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private baseUrl = 'http://localhost:8084/api/v1/inscription';

  constructor(private http: HttpClient) { }

  getAllFilieres(): Observable<any[]> {
    const url = `${this.baseUrl}/allFilieres`;
    return this.http.get<any[]>(url);
  }

  getFiliereById(filiereId: number): Observable<any> {
    const url = `${this.baseUrl}/filier/${filiereId}`;
    return this.http.get<any>(url);
  }

  getAllInscriptions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/mst`);
  }

  getAllInscriptionsDEUST(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/deust`);
  }

  getAllInscriptionsLST(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/lst`);
  }

  getInscriptionById(inscriptionId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${inscriptionId}`);
  }

  createInscription(inscriptionRequest: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/mst`, inscriptionRequest);
  }

  createInscriptionDEUST(inscriptionRequest: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/deust`, inscriptionRequest);
  }

  createInscriptionLST(inscriptionRequest: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/lst`, inscriptionRequest);
  }

  updateInscription(inscriptionId: number, inscriptionRequest: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/mst/${inscriptionId}`, inscriptionRequest);
  }

  updateInscriptionDEUST(inscriptionId: number, inscriptionRequest: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/deust/${inscriptionId}`, inscriptionRequest);
  }

  updateInscriptionLST(inscriptionId: number, inscriptionRequest: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/lst/${inscriptionId}`, inscriptionRequest);
  }

  deleteInscription(inscriptionId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${inscriptionId}`);
  }

  getAllAcceptedInscriptions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/accept`);
  }

  getAllRejectedInscriptions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/reject`);
  }

  getAllCanceledInscriptions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/cancel`);
  }

  acceptInscription(inscriptionId: number): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/${inscriptionId}/accept`, null);
  }

  rejectInscription(inscriptionId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${inscriptionId}/reject`, null);
  }

  cancelInscription(inscriptionId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${inscriptionId}/cancel`, null);
  }

  acceptInscriptionDEUST(number: number): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/deust/accept/${number}`, null);
  }

  acceptInscriptionLST(number: number): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/lst/accept/${number}`, null);
  }

  acceptInscriptionMST(number: number): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/mst/accept/${number}`, null);
  }

  deleteAllRejectedInscriptions() {
    return this.http.delete(`${this.baseUrl}/delreject`);
  }

  deleteAllCanceledInscriptions() {
    return this.http.delete(`${this.baseUrl}/delcancel`);
  }
}
