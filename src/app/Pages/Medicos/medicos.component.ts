import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { MedicosService } from '../../../Services/medicos.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})

export class MedicosComponent implements OnInit {

    public lst: any;
    public lista1: Observable<any[]>;
    public columnas: string[]=['tipo','documento','nombre', 'apellido','acciones'];
    
    constructor(
      private apiDoctor: MedicosService,
      private route: Router,
      private http: HttpClient,
    ) {
      
     }
  
    ngOnInit(): void {
  
      this.getDoctor();
    }

    getDoctor(){
      /* this.http.get<any[]>('localhost:8080/v1/medico').subscribe((result) =>{
        this.lst = result;
        console.log("retorno",this.lst);
     }) */
      this.lst = this.apiDoctor.getAllDoctorsList();
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
        this.lista1 = this.apiDoctor.deleteDoctor(num);
        console.log("Implement delete functionality here", this.lista1);
      }
    }

    goCrearDoctor(){
      this.route.navigate(['/crearDoctor']);
    }
    
    goHome(){
      this.route.navigate(['/home']);
    }
  }

