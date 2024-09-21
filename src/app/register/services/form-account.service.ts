import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { TypeDocument } from '../interfaces/type-document.interface';
import { Gender } from '../interfaces/gender.interface';

@Injectable({
  providedIn: 'root'
})
export class FormAccountService {

  private baseUrl = environment.serviceHost
  private http = inject(HttpClient)
  private gendersArray: Gender[] = [ 
    {id: 1, notation: 'Femenino'}, 
    {id: 2, notation: 'Masculino'} 
  ]
  private documents: TypeDocument [] = [
    {id: 1, notation: 'Tarjeta de identidad', description: 'Tarjeta de identidad'},
    {id: 2, notation: 'Cédula de ciudadanía', description: 'Cédula de ciudadanía'},
    {id: 3, notation: 'Cédula de extranjería', description: 'Cédula de extranjería'},
  ]

  getTypeDocuments(): Observable<TypeDocument []>  {
    return this.http.get<TypeDocument []>(`${this.baseUrl}/documentTypes?apiKey=030106`)
      .pipe(
        catchError(error => {
          console.log('Error fetching type documents')
          return of(this.getDocumentsArray())
        })
      )
  }

  getGenders(): Observable<Gender []> {
    return this.http.get<Gender []>(`${this.baseUrl}/genders?apiKey=030106`)
      .pipe(
        catchError(error => {
          console.log('Error fetching genders')
          return of(this.getGendersArray())
        })
      )
  }

  getGendersArray() {
    return [...this.gendersArray]
  }

  getDocumentsArray() {
    return [...this.documents]
  }
}
