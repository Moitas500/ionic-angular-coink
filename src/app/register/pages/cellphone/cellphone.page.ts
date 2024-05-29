import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KeyboardComponent } from '../../components/keyboard/keyboard.component';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonIcon,
  IonList,
  IonRouterOutlet,
  IonImg,
  IonInput
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-cellphone',
  templateUrl: './cellphone.page.html',
  styleUrls: ['./cellphone.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonImg,
    IonInput,
    KeyboardComponent,
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonIcon,
    IonList,
    IonRouterOutlet,
    IonContent, 
  ]
})
export default class CellphonePage {

}
