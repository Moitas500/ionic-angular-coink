import { Component } from '@angular/core';
import { IonImg } from '@ionic/angular/standalone';
import { FormAccountComponent } from '../../components/form-account/form-account.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [
    IonImg,
    FormAccountComponent
  ]
})
export default class AccountPage {

  constructor() { }

}
