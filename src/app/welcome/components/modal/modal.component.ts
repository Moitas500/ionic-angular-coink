import { Component } from '@angular/core';
import { IonModal, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [
    IonModal,
    IonImg
  ]
})
export class ModalComponent  {



}
