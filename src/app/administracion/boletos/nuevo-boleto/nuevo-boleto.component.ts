import { IRecorridos } from './../../../modelos/recorrido';
import { IRutas } from 'src/app/modelos/rutas';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BoletosService } from 'src/app/servicios/boletos.service';
import { IBoletos } from 'src/app/modelos/boleto';
import swal from 'sweetalert2';
import { RecorridosService } from 'src/app/servicios/recorridos.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-nuevo-boleto',
  templateUrl: './nuevo-boleto.component.html',
  styleUrls: ['./nuevo-boleto.component.css']
})
export class NuevoBoletoComponent implements OnInit {

  constructor(private boletoServicio:BoletosService,
    private ruta:Router,
    private fb: FormBuilder,
    private parametros: ActivatedRoute,
    private recorridosService: RecorridosService,
    private http:HttpClient
    ) { }
    boletos:FormGroup=this.fb.group({
      numero:'',
      recorridoID:''
    });
    modoEdison:boolean=false;
    boletoid:number=0;
    recorridos:IRecorridos[]=[];
  ngOnInit(): void {
    this.recorridosService.todasrecorrido().subscribe(datos=>this.recorridos=datos);
    this.parametros.params.subscribe(
      valor=>{
        if(valor['id']===undefined){
          return;
        }else{
          this.modoEdison=true;
          this.boletoid=valor['id'];
          this.boletoServicio.unboleto(this.boletoid).subscribe(
            datos=>{
              this.boletos.patchValue({
                numero:datos.numero,
                recorridoID:datos.recorridoID
              });
            }
          );
        }
      }
    );
  }
  grabar(){
    let boletos:IBoletos = Object.assign({},this.boletos.value); 
    if(!this.modoEdison){
      this.boletoServicio.insertarboleto(boletos)
      .subscribe(datos =>{
        this.boletoid=datos.boletoID;
      }, error=>{swal.fire('Recorrido','No se a podido guardar','error')},
      ()=>{
        let boletoRoles = {
          boletoID:this.boletos.controls['ruta'].value
        }
        this.http.post<any>("https://localhost:44335/api/recorridoes",boletoRoles).subscribe(datos=>{
          swal.fire('Recorrido','Se guardo con exito','success');
          this.ruta.navigate(['ruta']);
        });
      }
      )
    }else{
      boletos.boletoID=this.boletoid;
      this.boletoServicio.actualizarboleto(boletos)
      .subscribe(datos =>{swal.fire('Recorrido','Se guardo con exito','success');
      this.ruta.navigate(['boletos']);
      }, error=>{swal.fire('Recorrido','No se a podido actualizar','error')}
      )
    }
  }

}
