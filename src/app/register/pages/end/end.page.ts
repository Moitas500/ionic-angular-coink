import { Component } from '@angular/core';
import { IonImg } from '@ionic/angular/standalone';
import { ContractComponent } from '../../components/contract/contract.component';

@Component({
  selector: 'app-end',
  templateUrl: './end.page.html',
  styleUrls: ['./end.page.scss'],
  standalone: true,
  imports: [
    IonImg,
    ContractComponent
  ]
})
export default class EndPage {

}
