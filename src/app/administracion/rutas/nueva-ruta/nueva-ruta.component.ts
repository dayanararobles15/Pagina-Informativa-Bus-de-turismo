import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IRutas } from 'src/app/modelos/rutas';
import { RutasService } from 'src/app/servicios/rutas.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-nueva-ruta',
  templateUrl: './nueva-ruta.component.html',
  styleUrls: ['./nueva-ruta.component.css']
})
export class NuevaRutaComponent implements OnInit {
  constructor(private rutasServicio:RutasService,
    private rutaaaaa:Router,
    private fb: FormBuilder,
    private parametros: ActivatedRoute
    ) { }
    rutas:FormGroup=this.fb.group({
      lugar_salid:'',
      lugar_llegada:'',
      actividades:'',
      tiempo_estimado:'',
      tiempo_parada:'',
      precio:''
    });
modoEdison:boolean=false;
rutaid:number=0;
ngOnInit(): void {
  this.parametros.params.subscribe(
    valor=>{
      if(valor['id']===undefined){
        return;
      }else{
        this.modoEdison=true;
        this.rutaid=valor['id'];
        this.rutasServicio.unaRuta(this.rutaid).subscribe(
          datos=>{
            this.rutas.patchValue({
              lugar_salid:datos.lugar_salid,
              lugar_llegada:datos.lugar_llegada,
              actividades:datos.actividades,
              tiempo_estimado:datos.tiempo_estimado,
              tiempo_parada:datos.tiempo_parada,
              precio:datos.precio
            });
          }
        );
      }
    }
  );
}
  grabar(){
    let ruta:IRutas = Object.assign({},this.rutas.value);
    if(!this.modoEdison){
      this.rutasServicio.insertarrutas(ruta)
      .subscribe(datos =>{swal.fire('Rutas','Se guardo con exito','success');
      this.rutaaaaa.navigate(['rutas']);
      }, error=>{swal.fire('Rutas','No se a podido guardar','error')}
      )
    }else{
      ruta.rutaID=this.rutaid;
      this.rutasServicio.actualizarrutas(ruta)
      .subscribe(datos =>{swal.fire('Rutas','Se guardo con exito','success');
      this.rutaaaaa.navigate(['rutas']);
      }, error=>{swal.fire('Rutas','No se a podido guardar','error')}
      )
    }
  }
}
