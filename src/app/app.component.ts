import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  host: {ngSkipHydration: 'true'},
  imports: [RouterOutlet, 
            MatSidenavModule,
            MatButtonModule,
            MatSelectModule,
            MatFormFieldModule,
            NgIf,
            CarouselModule],
  templateUrl: './app.component.html',
  styleUrl:'./app.component.css',
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {
  title = 'First Project';

  menuState ='out';  

  tickets:string[]=["APARMS Front-End","IDL Select Box Bug", "Bottom Contours GUI", "APARMS Refactor", "Detections Type Addition and Testing"];
  selectedTicket:string ="";

  APARMSfe = "images/APARMSfe.png";

  devOpsTools: string[]= ["docker", "kubernetes", "git", "linux", "angular", "jenkins", "gradle"];


  constructor(){
    this.selectedTicket = "";
  }

  toggleAnimation() {
    this.menuState = this.menuState === 'in' ? 'out' : 'in';
  }

  responsiveOptions: any[] | undefined;

  ngOnInit() {

      this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }
}
