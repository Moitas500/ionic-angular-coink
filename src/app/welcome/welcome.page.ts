import { Component, OnInit, inject } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { UserService } from '../register/services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [
    ModalComponent
  ]
})
export default class WelcomePage implements OnInit{

  private userService = inject(UserService)

  ngOnInit(): void {
    console.log(
      this.userService.getAccount(),
      this.userService.getCellphone(),
      this.userService.getUser()
    )
  }

}
