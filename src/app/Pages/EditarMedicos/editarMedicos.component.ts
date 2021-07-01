import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { MedicosService } from '../../../Services/medicos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editarMedicos',
  templateUrl: './editarMedicos.component.html',
  styleUrls: ['./editarMedicos.component.scss']
})

export class editarMedicosComponent implements OnInit {

    public lst: Observable<any[]>;
    public columnas: string[]=['tipo','documento','nombre', 'apellido','acciones'];
    public registro: any;
    
    constructor(
      private apiDoctor: MedicosService,
    ) {
      
     }
  
    ngOnInit(): void {
    }

    updateDoctor() {
        var tipoDoc = ((document.getElementById('tipo') as HTMLInputElement).value);
        var nombre = ((document.getElementById('primerNombre') as HTMLInputElement).value);
        var nombre2 = ((document.getElementById('segundoNombre') as HTMLInputElement).value);
        var apellido = ((document.getElementById('primerApellido') as HTMLInputElement).value);
        var apellido2 = ((document.getElementById('segundoApellido') as HTMLInputElement).value);

        this.registro = {
          tipoDocumento: tipoDoc,
          primerNombre: nombre,
          segundoNombre: nombre2,
          primerApellido: apellido,
          segundoApellido: apellido2,
        }
        console.log("registro",this.registro);
        this.apiDoctor.putDoctor(this.registro);
    }
    
  
}

