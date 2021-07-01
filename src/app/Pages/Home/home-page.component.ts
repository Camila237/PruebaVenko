import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  loading = true;
  mobile = false;

  constructor(public route: Router) {
  }

  ngOnInit(): void {
  }

  goMedicos(){
    this.route.navigate(['/medicos']);
  }

  goPacientes(){
    this.route.navigate(['/pacientes']);
  }

  goHome(){
    this.route.navigate(['/home']);
  }

}

 