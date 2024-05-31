import { Component, WritableSignal, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { IonCheckbox } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contract',
  standalone: true,
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss'],
  imports: [
    IonCheckbox
  ]
})
export class ContractComponent {

  public checkContract: WritableSignal<boolean> = signal(false)
  private router = inject(Router)

  toogleContract() {
    this.checkContract.set(!this.checkContract())
  }

  acceptContract() {
    if (!this.checkContract()) return

    this.router.navigate(['welcome'])
  }

}
