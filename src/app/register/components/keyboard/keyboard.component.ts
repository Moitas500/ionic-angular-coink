import { CommonModule } from '@angular/common';
import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonIcon } from '@ionic/angular/standalone'
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

const LENGTH_REQUIRED = 12

@Component({
  selector: 'app-keyboard',
  standalone: true,
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
  imports: [
    IonButton,
    IonIcon,
    ReactiveFormsModule,
    CommonModule
  ],
})
export class KeyboardComponent implements OnInit{

  public formCellphone!: FormGroup
  public listButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '0', '>']
  public isMaxReached: WritableSignal<boolean> = signal(false)
  private fb = inject(FormBuilder)
  private userService = inject(UserService)
  private router = inject(Router)

  ngOnInit(): void {
    this.formCellphone = this.fb.group({
      cellphone: ['', Validators.required ]
    })

    this.formCellphone.get('cellphone')!.valueChanges.subscribe( (value) => {
      this.isMaxReached.set( value.length >= LENGTH_REQUIRED )
    })
  }

  addToInput(number: string) {
    let currentValue = this.formCellphone.get('cellphone')!.value

    if ( currentValue.length < LENGTH_REQUIRED) {
      if (currentValue.length === 3) {
        currentValue += ' - ';
      }
      this.formCellphone.patchValue({ cellphone: currentValue + number })
    }
  }

  onSubmit() {
    if ( this.formCellphone.invalid ) {
      alert( 'Formulario invalido' )
      return
    }

    this.userService.setCellphone(this.formCellphone.value)
    this.router.navigateByUrl('/register/account')
  }

  onDelete() {
    const currentValue = this.formCellphone.get('cellphone')!.value
    if (currentValue.length > 0) {
      this.formCellphone.patchValue({ cellphone: currentValue.slice(0, -1) });
    }
  }

}
