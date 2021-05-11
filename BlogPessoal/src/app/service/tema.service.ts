import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { tema } from '../model/tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token= {
    headers:new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<tema[]>{
  return this.http.get<tema[]>('http://localhost:8080/temas', this.token)
  }

  getByIdTema(id: number): Observable<tema>{
    return this.http.get<tema>(`http://localhost8080/${id}`, this.token)
  }

  postTema(tema: tema):Observable<tema>{
    return this.http.post<tema>('http://localhost:8080/temas',tema, this.token)
  }

  putTema(tema: tema): Observable<tema>{
    return this.http.put<tema>('http://localhost8080/tema', tema, this.token)
  }
   deleteTema(id:number){
     return this.http.delete(`http://localhost8080/tema/${id}`, this.token)
   }

}