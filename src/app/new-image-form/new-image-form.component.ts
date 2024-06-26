import { Component, EventEmitter, Output } from '@angular/core';
import { ImageCreation } from '../model/image';

@Component({
  selector: 'app-new-image-form',
  templateUrl: './new-image-form.component.html',
  styleUrls: ['./new-image-form.component.css'],
})
export class NewImageFormComponent {
  imageType: string = 'png'; //We set the selectbox to png by default
  content: string = '';
  @Output() typeImg = new EventEmitter<string>();
  @Output() baseImg = new EventEmitter<string>();

  transmit(): void {
    this.typeImg.emit(this.imageType);
    this.baseImg.emit(this.content);
  }
}
