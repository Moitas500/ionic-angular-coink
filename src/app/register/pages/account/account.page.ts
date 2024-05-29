import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonImg,
  IonInput,
  IonList,
  IonItem,
  IonButton
} from '@ionic/angular/standalone';

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
    IonButton
  ]
})
export default class AccountPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
