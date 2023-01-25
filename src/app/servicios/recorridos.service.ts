import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecorridos } from '../modelos/recorrido';

@Injectable({
  providedIn: 'root'
})
export class RecorridosService {
  private apiRestUrl = 'https://localhost:44335/api/recorridoes';

  constructor(private http:HttpClient) { }
  todasrecorrido():Observable<IRecorridos[]>{
    return this.http.get<IRecorridos[]>(this.apiRestUrl);
  }
  unarecorrido(recorridoid:number):Observable<IRecorridos>{
    return this.http.get<IRecorridos>(this.apiRestUrl + '/' + recorridoid);
  }
  
  insertarrecorrido(recorrido:IRecorridos):Observable<IRecorridos>{
    return this.http.post<IRecorridos>(this.apiRestUrl,recorrido);
  }
  actualizarrecorrido(recorrido:IRecorridos):Observable<IRecorridos>{
    return this.http.put<IRecorridos>(this.apiRestUrl+ '/' + recorrido.recorridoID, recorrido);
  }
  eliminarrecorrido(recorridoid:number):Observable<IRecorridos>{
    return this.http.delete<IRecorridos>(this.apiRestUrl + '/' + recorridoid);
  }
}
