import { RutasService } from './../../servicios/rutas.service';
import { Component, OnInit } from '@angular/core';
import { IRutas } from 'src/app/modelos/rutas';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {

  listaRuta: IRutas[]=[];
  constructor(private RutasServicio:RutasService) { }

  ngOnInit(): void {
    
    this.cargarTabla();
    
  }
  cargarTabla(){
    this.RutasServicio.todasrutas().subscribe(
      datosrutas =>{
        this.listaRuta = datosrutas;
        console.log(datosrutas);
      }
    );
  }
  eliminar(rutaid:number){
    Swal.fire({
      title: 'Rutas',
      text: "Desea eliminar el registro?",
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.RutasServicio.eliminarRuta(rutaid).subscribe(datos=>{
          Swal.fire("Ruta","Se elimino con exito", "success");
          this.cargarTabla();
        });
      }
    })
  }
}