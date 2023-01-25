import {HttpClient}from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoletos } from '../modelos/boleto';
@Injectable({
  providedIn: 'root'
})
export class BoletosService {

  private apiRestUrl = 'https://localhost:44335/api/boletoes';

  constructor(private http:HttpClient) { }
  todasboleto():Observable<IBoletos[]>{
    return this.http.get<IBoletos[]>(this.apiRestUrl);
  }
  unboleto(boletoid:number):Observable<IBoletos>{
    return this.http.get<IBoletos>(this.apiRestUrl + '/' + boletoid);
  }
  
  insertarboleto(boleto:IBoletos):Observable<IBoletos>{
    return this.http.post<IBoletos>(this.apiRestUrl,boleto);
  }
  actualizarboleto(boleto:IBoletos):Observable<IBoletos>{
    return this.http.put<IBoletos>(this.apiRestUrl+ '/' + boleto.boletoID, boleto);
  }
  eliminarboleto(boletoid:number):Observable<IBoletos>{
    return this.http.delete<IBoletos>(this.apiRestUrl + '/' + boletoid);
  }
}
