import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  myAppUrl: string;
  myApiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
};
constructor(
  private _http: HttpClient
) { 
}


  getAllPacientesList():Observable<any> {
    return this._http.get<any[]>('localhost:8080/v1/paciente',{
      headers : {
        'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
        'Cache-Control': 'no-cache',
        "Authorization": 'Bearer f4b0f572-500c-1da9-c6c7-2a8ab1405084'
      } 
  })
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  getPaciente(num):Observable<any> {
    return this._http.get<any[]>('localhost:8080/v1/paciente/'+num, {
      headers : {
        'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
        'Cache-Control': 'no-cache',
        "Authorization": 'Bearer f4b0f572-500c-1da9-c6c7-2a8ab1405084'
      } 
  })
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  putDoctor(newDatos):Observable<any> {
    return this._http.put<any[]>('localhost:8080/v1/medico/', newDatos,{
        headers : {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          "Authorization": 'Bearer d7c231dc-ae34-960d-5e22-68b71e1d5ec0'
        } 
    }) 
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  postPaciente(Datos):Observable<any> {
    return this._http.post<any[]>('localhost:8080/v1/paciente', Datos,{
        headers : {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          "Authorization": 'Bearer 7c81d21d-1d7c-0fcc-10c6-b445e29819de'
        } 
    }) 
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  
  deletePaciente(num):Observable<any> {
    return this._http.delete<any[]>('localhost:8080/v1/paciente/'+num, {
      headers : {
        'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
        'Cache-Control': 'no-cache',
        "Authorization": 'Bearer f4b0f572-500c-1da9-c6c7-2a8ab1405084'
      } 
  })
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }



  errorHandler(error) {
    console.log("error");
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

