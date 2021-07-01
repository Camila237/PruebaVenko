import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { MedicosService } from '../../../Services/medicos.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearMedico',
  templateUrl: './crearMedico.component.html',
  styleUrls: ['./crearMedico.component.scss']
})

export class CrearMedicosComponent implements OnInit {

    public lst: Observable<any[]>;
    public lista1: Observable<any[]>;
    public columnas: string[]=['tipo','documento','nombre', 'apellido','acciones'];
    public registro: any;
    public retorno : any;
    public retorno2: any;
    public headers2 = new Headers();
    
    // Opcion para api
    public headers_object = new HttpHeaders().set("Authorization", "Bearer " + "7c81d21d-1d7c-0fcc-10c6-b445e29819de");
    public headers: any = {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Authorization': 'Bearer 7c81d21d-1d7c-0fcc-10c6-b445e29819de'
     };
 
    // Otra Opcion para api
    public httpOptions = {
        headers: new HttpHeaders(this.headers),
     };

    constructor(
      private apiDoctor: MedicosService,
      private route : Router,
      private http: HttpClient,
    ) {
        // Otra Opcion 2 para api
        this.httpOptions = {
            headers: this.headers_object
          
        };
       this.headers2.append( "Content-Type", "application/json; charset=utf-8");
       this.headers2.append( "Authorization", "Bearer d7c231dc-ae34-960d-5e22-68b71e1d5ec0");
    }
  
    ngOnInit(): void {
    
    }

    createDoctor() {
        var tipoDoc = ((document.getElementById('tipo') as HTMLInputElement).value);
        var numDoc = ((document.getElementById('numero') as HTMLInputElement).value);
        var nombre = ((document.getElementById('primerNombre') as HTMLInputElement).value);
        var nombre2 = ((document.getElementById('segundoNombre') as HTMLInputElement).value);
        var apellido = ((document.getElementById('primerApellido') as HTMLInputElement).value);
        var apellido2 = ((document.getElementById('segundoApellido') as HTMLInputElement).value);

        this.registro = {
          tipoDocumento: tipoDoc,
          numeroDocumento: numDoc,
          primerNombre: nombre,
          segundoNombre: nombre2,
          primerApellido: apellido,
          segundoApellido: apellido2,
        }
        console.log("registro",this.registro);
        // Otra Opcion 3 para api
        this.http.post<any[]>('localhost:8080/v1/medico', this.registro).subscribe((result) =>{
            this.retorno2 = result;
            console.log("retorno",this.retorno2);
        })
        //Opcion igual que los otros
        /* this.retorno = this.apiDoctor.postDoctor(this.registro).subscribe((result) =>{
            this.retorno2 = result;
            console.log("retorno",this.retorno2);
        }) */
    }

    goDoctores(){
        this.route.navigate(['/medicos']);
    }
    
  
}

