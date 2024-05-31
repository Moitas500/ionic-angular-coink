import { Component } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [
    ModalComponent
  ]
})
export default class WelcomePage {

}
