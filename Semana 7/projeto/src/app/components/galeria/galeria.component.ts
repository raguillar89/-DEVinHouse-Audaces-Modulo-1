import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {
  @Input() fotos: string[] = [
    '../assets/bleach.gif',
    '../assets/fma.gif',
    '../assets/mng.gif',
    '../assets/zoro.gif'
  ];

  imagemAtual = 0;

  nextImage() {
    if (this.imagemAtual !== this.fotos.length - 1) {
      this.imagemAtual += 1;
    }
  }

  previousImage() {
    if (this.imagemAtual !== 0) {
      this.imagemAtual -= 1;
    }
  }

  firstImage() {
    this.imagemAtual = 0;
  }

  lastImage() {
    this.imagemAtual = this.fotos.length - 1;
  }
}
