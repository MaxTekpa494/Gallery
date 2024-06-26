import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Image } from '../model/image';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
})
export class CarrouselComponent {
  @Output() idImg = new EventEmitter<string>();
  @Input() images: Image[];

  id: string;
  constructor() {}

  gOnInit(): void {
    console.log(this.images);
  }

  onDelete(id: string) {
    this.idImg.emit(id);
  }
}
