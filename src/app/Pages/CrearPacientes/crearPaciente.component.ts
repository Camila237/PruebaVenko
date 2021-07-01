import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { PacientesService } from '../../../Services/pacientes.service';
import { Observable, Subscription} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearPaciente',
  templateUrl: './crearPaciente.component.html',
  styleUrls: ['./crearPaciente.component.scss']
})

export class CrearPacienteComponent implements OnInit {

    public lst: Observable<any[]>;
    public columnas: string[]=['tipo','documento','nombre', 'apellido','acciones'];
    public registro: any;
    public retorno: any;
    public prueba: any;
    
    constructor(
      private apiPaciente: PacientesService,
      private route: Router,
    ) {
      
     }
  
    ngOnInit(): void {
    }

    createPaciente() {
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
        this.retorno = this.apiPaciente.postPaciente(this.registro).subscribe((result)=>{
          this.prueba = result;
          console.log("prueba", this.prueba);
        });
        console.log("retorno", this.retorno);
    }
    
    goPacientes(){
        this.route.navigate(['/pacientes']);
    }
  
}

