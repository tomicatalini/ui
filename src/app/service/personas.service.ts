import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private apiUrl = "url de la API personas para obtener respuestas del back";

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Persona[]>{
    return this.http.get( this.apiUrl).pipe(
      map( (response: any) => response.personas as Persona[])
    )  
  }
}
