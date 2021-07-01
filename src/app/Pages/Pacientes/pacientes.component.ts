import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { PacientesService } from '../../../Services/pacientes.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})

export class PacientesComponent implements OnInit {

    public lst: Observable<any[]>;
    public lista1: Observable<any[]>;
    public columnas: string[]=['tipo','documento','nombre', 'apellido','acciones'];
    
    constructor(
      private apiPaciente: PacientesService,
      private route: Router,
      private http: HttpClient
    ) {
      
     }
  
    ngOnInit(): void {
      this.getPacientes();
    }

    getPacientes(){
      this.lst = this.apiPaciente.getAllPacientesList();
      console.log("lista", this.lst);
      let prueba = this.lst;
      console.log("prueba", prueba);
      prueba.forEach(element => {
        console.log("elemento", element);
      });
    }
    
    DeleteMethod(num: string) {
      console.log("eliminar", num);
      if(confirm("Seguro quieres eliminar "+num)) {
        console.log("cedula", num);
        this.lista1 = this.apiPaciente.deletePaciente(num);
        console.log("Implement delete functionality here", this.lista1);
      }
    }

    goCrearPaciente(){
      this.route.navigate(['/crearPaciente']);
    }

    goHome(){
      this.route.navigate(['/home']);
    } 
  }

