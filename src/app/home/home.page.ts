import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonImg  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonImg,
  ],
})
export default class HomePage {
  
  private _router = inject(Router)

  navigatoToRegister() {
    this._router.navigateByUrl('/register')
  }

}
