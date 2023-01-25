import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRutas } from '../modelos/rutas';

@Injectable({
  providedIn: 'root'
})
export class RutasService {
  private apiRestUrl = 'https://localhost:44335/api/rutas';

  constructor(private http:HttpClient) { }
  todasrutas():Observable<IRutas[]>{
    return this.http.get<IRutas[]>(this.apiRestUrl);
  }
  unaRuta(rutaid:number):Observable<IRutas>{
    return this.http.get<IRutas>(this.apiRestUrl + '/' + rutaid);
  }
  
  insertarrutas(rutas:IRutas):Observable<IRutas>{
    return this.http.post<IRutas>(this.apiRestUrl,rutas);
  }
  actualizarrutas(rutas:IRutas):Observable<IRutas>{
    return this.http.put<IRutas>(this.apiRestUrl+ '/' + rutas.rutaID, rutas);
  }
  eliminarRuta(rutaid:number):Observable<IRutas>{
    return this.http.delete<IRutas>(this.apiRestUrl + '/' + rutaid);
  }

}