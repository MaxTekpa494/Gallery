import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../gallery.service';
import { GetUserImagesResponse, Image, ImageCreation } from '../model/image';
import { map } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  pseudo: string;
  typeImg: string;
  contentImg: string;
  allImg: Image[];
  imCreation: ImageCreation;
  constructor(
    private route: ActivatedRoute,
    private userService: GalleryService
  ) {}

  ngOnInit(): void {
    this.pseudo = this.route.snapshot.paramMap.get('pseudo');
    //console.log(this.pseudo);
    this.recupImage();
  }

  affiche(): void {
    console.log(this.pseudo);
  }
  recupType(type: string) {
    this.typeImg = type;
  }
  recupBase(base: string) {
    this.contentImg = base;
    //console.log(this.contentImg);
    this.addImage();
    this.recupImage();
  }

  recupId(id: string) {
    this.userService.deleteImage(this.pseudo, id).subscribe((success) => {
      if (success) {
        console.log('Reussi delete');
      } else {
        console.log('Rate detele');
      }
    });
    this.recupImage();
  }

  recupImage(): void {
    this.userService
      .getUserImages(this.pseudo)
      .subscribe((response) => (this.allImg = response));
    for (let img in this.allImg) {
      console.log(img);
    }
  }

  addImage() {
    this.imCreation = { content: this.contentImg, type: this.typeImg };
    this.userService
      .addImage(this.pseudo, this.imCreation)
      .subscribe((success) => {
        if (success) {
          console.log('Reussi');
        } else {
          console.log('Rate');
        }
      });
  }
}
