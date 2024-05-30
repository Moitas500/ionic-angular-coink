import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
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

  getTypeDocuments() {
    return this.http.get<TypeDocument []>(`${this.baseUrl}/documentTypes?apiKey=030106`)
      .pipe(
        catchError(error => {
          console.log('Error fetching type documents')
          return throwError(error)
        })
      )
  }

  getGenders() {
    return this.http.get(`${this.baseUrl}/genders?apiKey=030106`)
      .pipe(
        catchError(error => {
          console.log('Error fetching genders')
          return throwError(error)
        })
      )
  }

  getGendersArray() {
    return [...this.gendersArray]
  }
}
