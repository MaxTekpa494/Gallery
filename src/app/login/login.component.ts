import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  pseudo: string = '';
  constructor(private router: Router) {}

  log() {
    this.router.navigate([`/gallery/${this.pseudo}`]);
  }
}
