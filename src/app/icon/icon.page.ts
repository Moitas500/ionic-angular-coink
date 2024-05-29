import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.page.html',
  styleUrls: ['./icon.page.scss'],
  standalone: true,
  imports: [ IonContent, IonImg ]
})
export default class IconPage {

  private _router = inject(Router)

  goToHome() {
    this._router.navigateByUrl('home')
  }

}
