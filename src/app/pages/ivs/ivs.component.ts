import { CommonModule } from '@angular/common';
import { Component,HostListener, ElementRef} from '@angular/core';

import { ScriptService } from '../../services/script.service';

import { environment } from '@environments/environment';

@Component({
  selector: 'app-ivs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ivs.component.html',
  styleUrl: './ivs.component.scss'
})
export class IvsComponent {
  constructor(private scriptService: ScriptService, private elementRef: ElementRef<HTMLElement>){}
  videoOK: Boolean = true;
  myVideo:any = '';

  ngOnInit(){
    this.cargaVideoJS();

    this.myVideo = document.getElementById('my-video');

    console.log(environment.demo);
    /*
    setInterval(() => {
      this.checkVideo();
      }, 5000);
    */

  }
  cargaVideoJS(){
    //Esta es la funcion que se estuvo avanzando para culqui
    this.scriptService.loadScript({id: 'my-ivs', url : 'https://vjs.zencdn.net/7.11.4/video.min.js'})
    .then(data => {
        console.log('script loaded ivs', data);
    }).catch(error => console.log(error));
  }
  videoErr(){
    console.log('ERROR DETECTADO');
    this.videoOK = false;
  }


  @HostListener('document:visibilitychange', ['$event'])
  visibilitychange() {
    this.checkHiddenDocument();
  }

  checkHiddenDocument() {
    if (document.hidden) {
      this.pauseVideo();
      console.log('Dejó la pantalla')
    } else {
      console.log('Regresó a la pantalla')
      this.playVideo();
    }
  }

  checkVideo(){
    console.log('checking');
    console.log(this.myVideo.played);
  }
  pauseVideo(){}

  playVideo(){}

  ngOnDestroy(): void {}
}
