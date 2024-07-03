import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  host: {ngSkipHydration: 'true'},
  imports: [RouterOutlet, 
            MatSidenavModule,
            MatButtonModule],
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
    //trigger('smoothScroll'

   // )
  ]
})
export class AppComponent {
  title = 'First Project';

  menuState:string ='out';

  toggleMenu(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  
}
