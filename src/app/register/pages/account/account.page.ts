import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonImg,
  IonInput,
  IonList,
  IonItem,
  IonButton
} from '@ionic/angular/standalone';
import { FormAccountComponent } from '../../components/form-account/form-account.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonImg,
    IonInput,
    IonList,
    IonItem,
    IonButton,
    FormAccountComponent
  ]
})
export default class AccountPage {

  constructor() { }

}
