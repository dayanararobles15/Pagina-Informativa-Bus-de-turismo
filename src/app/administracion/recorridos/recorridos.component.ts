import { RecorridosService } from './../../servicios/recorridos.service';
import { Component, OnInit } from '@angular/core';
import { IRecorridos } from 'src/app/modelos/recorrido';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-recorridos',
  templateUrl: './recorridos.component.html',
  styleUrls: ['./recorridos.component.css']
})
export class RecorridosComponent implements OnInit {
  listaRecorridos: IRecorridos[]=[];
  constructor(private RecorridosService:RecorridosService) { }

  ngOnInit(): void {
    this.cargarTabla();
  }
  cargarTabla(){
    this.RecorridosService.todasrecorrido().subscribe(
      datosrecorridos =>{
        this.listaRecorridos = datosrecorridos;
      }
    );
  }
  eliminar(recorridoid:number){
    Swal.fire({
      title: 'Recorridos',
      text: "Desea eliminar el registro?",
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.RecorridosService.eliminarrecorrido(recorridoid).subscribe(datos=>{
          Swal.fire("Ruta","Se elimino con exito", "success");
          this.cargarTabla();
        });
      }
    })
  }

}
