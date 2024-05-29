import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonIcon,
  IonList,
  IonRadioGroup,
  IonRadio,
  IonRouterOutlet
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonBackButton,
    IonButtons,
    IonIcon,
    IonList,
    IonRadioGroup,
    IonRadio,
    IonRouterOutlet
  ]
})
export default class RegisterPage {

  constructor() { }

}
