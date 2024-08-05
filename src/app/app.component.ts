import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { BaseChartDirective } from 'ng2-charts';
import { ChartModule } from 'primeng/chart';
import { MatExpansionModule } from '@angular/material/expansion';

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
            CarouselModule,
            ChartModule,
            BaseChartDirective,
            MatExpansionModule
          ],
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

  tickets:string[]=[
                    "APARMS Front-End",
                    "IDL Select Box Bug", 
                    "Bottom Contours GUI", 
                    "APARMS Refactor", 
                    "Detections Type Addition and Testing", 
                    "Freddies Migration (with Marcus)"
                  ];
  selectedTicket:string ="";

  APARMSfe = "images/APARMSfe.png";

  devOpsTools: string[]= ["docker", "kubernetes", "git", "linux", "angular", "jenkins", "gradle"];

  data:any;


  constructor(){
    this.selectedTicket = "APARMS Front-End";

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      }
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
