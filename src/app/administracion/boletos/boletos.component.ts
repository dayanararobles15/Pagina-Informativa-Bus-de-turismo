import { BoletosService } from './../../servicios/boletos.service';
import { Component, OnInit } from '@angular/core';
import { IBoletos } from 'src/app/modelos/boleto';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-boletos',
  templateUrl: './boletos.component.html',
  styleUrls: ['./boletos.component.css']
})
export class BoletosComponent implements OnInit {
  listaBoletos: IBoletos[]=[];
  constructor(private BoletosService:BoletosService) { }

  ngOnInit(): void {
    this.cargarTabla();
  }
  cargarTabla(){
    this.BoletosService.todasboleto().subscribe(
      datosboletos =>{
        this.listaBoletos = datosboletos;
      }
    );
  }
  eliminar(boletoid:number){
    Swal.fire({
      title: 'Boletos',
      text: "Desea eliminar el registro?",
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.BoletosService.eliminarboleto(boletoid).subscribe(datos=>{
          Swal.fire("Ruta","Se elimino con exito", "success");
          this.cargarTabla();
        });
      }
    })
  }
}
