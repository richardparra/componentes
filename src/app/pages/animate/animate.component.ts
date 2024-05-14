import { Component, } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as AOS from 'aos';
//import AOS from 'aos';

@Component({
  selector: 'app-animate',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './animate.component.html',
  styleUrls: [ './animate.component.scss' ]
})
export class AnimateComponent {
  name = 'Angular 7 AOS Animations';
  ngOnInit(){
    AOS.init();

  }
}
