import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'gallery/:id', component: GalleryComponent },
];
