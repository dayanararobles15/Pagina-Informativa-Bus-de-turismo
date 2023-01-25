import { IRutas } from 'src/app/modelos/rutas';
import { RutasService } from 'src/app/servicios/rutas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecorridosService } from 'src/app/servicios/recorridos.service';
import { IRecorridos } from 'src/app/modelos/recorrido';
import swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-nuevo-recorrido',
  templateUrl: './nuevo-recorrido.component.html',
  styleUrls: ['./nuevo-recorrido.component.css']
})
export class NuevoRecorridoComponent implements OnInit {

  constructor(private recorridosServicio:RecorridosService,
    private ruta:Router,
    private fb: FormBuilder,
    private parametros: ActivatedRoute,
    private RutasServicio: RutasService,
    private http:HttpClient
    ) { }
    recorridos:FormGroup=this.fb.group({
      nombre:'',
      dias:'',
      fecha:'',
      hora_salida:'',
      hora_llegada:'',
      rutaID:''
    });
    modoEdison:boolean=false;
    recorridoid:number=0;
    rutas:IRutas[]=[];
  ngOnInit(): void {
    this.RutasServicio.todasrutas().subscribe(datos=>this.rutas=datos);
    this.parametros.params.subscribe(
      valor=>{
        if(valor['id']===undefined){
          return;
        }else{
          this.modoEdison=true;
          this.recorridoid=valor['id'];
          
          this.recorridosServicio.unarecorrido(this.recorridoid).subscribe(
            datos=>{
              this.recorridos.patchValue({
                nombre:datos.nombre,
                dias:datos.dias,
                fecha:datos.fecha,
                hora_salida:datos.hora_salida,
                hora_llegada:datos.hora_llegada,
                rutaID:datos.rutaID
              });
            }
          );
        }
      }
    );
  }
  grabar(){
    let recorrido:IRecorridos = Object.assign({},this.recorridos.value); 
    if(!this.modoEdison){
      this.recorridosServicio.insertarrecorrido(recorrido)
      .subscribe(datos =>{
        this.recorridoid=datos.recorridoID;
        
      }, error=>{swal.fire('Recorrido','No se a podido guardar','error')},
      ()=>{
        let recorridoRoles = {
          rutaID:this.recorridos.controls['ruta'].value
        }
        this.http.post<any>("https://localhost:44335/api/recorridoes",recorridoRoles).subscribe(datos=>{
          swal.fire('Recorrido','Se guardo con exito','success');
          this.ruta.navigate(['ruta']);
        });
      }
      )
    }else{
      recorrido.recorridoID=this.recorridoid;
      this.recorridosServicio.actualizarrecorrido(recorrido)
      .subscribe(datos =>{swal.fire('Recorrido','Se guardo con exito','success');
      this.ruta.navigate(['recorridos']);
      }, error=>{swal.fire('Recorrido','No se a podido actualizar','error')}
      )
    }
  }
}
