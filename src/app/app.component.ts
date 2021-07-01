import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, RouterEvent } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaFront';
  public loogged = true;
  ShowLoadingPage = true;
  
  constructor(private _router:Router){

    this._router.events.subscribe((RouterEvent:Event)=>{
      if(RouterEvent instanceof NavigationStart){
        this.ShowLoadingPage = true;
      }
      if(RouterEvent instanceof NavigationEnd){
        this.ShowLoadingPage = false;
      }
    });
    
  }
}
