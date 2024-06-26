import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { GetUserImagesResponse, Image, ImageCreation } from './model/image';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private apiBaseUrl: string =
    'https://europe-west1-cours-angular-263913.cloudfunctions.net/messenger/api/images';
  constructor(private httpClient: HttpClient) {}

  getUserImages(username: string): Observable<Image[]> {
    const url = `${this.apiBaseUrl}/${username}`;
    return this.httpClient.get<GetUserImagesResponse>(url).pipe(
      map((n) => {
        return n.images;
      })
    );
  }

  deleteImage(username: string, imageId: string): Observable<boolean> {
    const url = `${this.apiBaseUrl}/${username}/${imageId}`;
    return this.httpClient.delete<Image>(url).pipe(map(() => true));
  }

  addImage(
    username: string,
    imageCreation: ImageCreation
  ): Observable<boolean> {
    const url = `${this.apiBaseUrl}/${username}`;
    return this.httpClient
      .post<ImageCreation>(url, imageCreation)
      .pipe(map(() => true));
  }
}
