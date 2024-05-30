import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { 
  IonImg,
  IonInput,
  IonList,
  IonItem,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonIcon
} from '@ionic/angular/standalone';
import { ValidatorService } from '../../services/validator.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormAccountService } from '../../services/form-account.service';
import { TypeDocument } from '../../interfaces/type-document.interface';
import { Gender } from '../../interfaces/gender.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-form-account',
  standalone: true,
  templateUrl: './form-account.component.html',
  styleUrls: ['./form-account.component.scss'],
  imports: [
    IonImg,
    IonInput,
    IonList,
    IonItem,
    IonButton,
    IonSelect,
    IonIcon,
    IonSelectOption,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class FormAccountComponent  implements OnInit {

  public accountDataForm!: FormGroup
  public isFormValid: WritableSignal<boolean> = signal(false)
  public typeDocuments: WritableSignal<TypeDocument []> = signal([])
  public genders: WritableSignal<Gender []> = signal([])
  public buttonPin = signal(false)
  public buttonConfirmationPin = signal(false)
  private fb = inject(FormBuilder)
  private router = inject(Router)
  private validatorService = inject(ValidatorService)
  private formAccountService = inject(FormAccountService)
  private userService = inject(UserService)

  async ngOnInit() {
    this.formAccountService.getTypeDocuments().subscribe(typeDocuments => {
      this.typeDocuments.set(typeDocuments)
    })

    this.formAccountService.getGenders().subscribe(genders => {
      //El endpoint devuelve un payload en vez de los generos
      console.log(genders)
      this.genders.set(this.formAccountService.getGendersArray())
    })

    this.createForm()
  }

  createForm() {
    this.accountDataForm = this.fb.group({
        typeDocument: ['', Validators.required],
        numDocument: ['', Validators.required],
        expDocument: ['', Validators.required],
        birthday: ['', Validators.required],
        gender: ['', Validators.required],
        email: ['', [Validators.required]],
        confirmationEmail: ['', [Validators.required],],
        pin: ['', Validators.required],
        confirmationPIN: ['', Validators.required]
      },
      {
        validators: [
          this.validatorService.isFieldOneEqualFieldTwo('email', 'confirmationEmail', { emailError: true }),
          this.validatorService.isFieldOneEqualFieldTwo('pin', 'confirmationPIN', { pinError: true })
        ]
      }
    )
  }

  onSubmit() {
    if ( this.accountDataForm.invalid ) {
      return
    }

    this.userService.setUser({...this.accountDataForm.value})
    this.userService.setAccount({...this.accountDataForm.value})

    this.router.navigate(['/register/end'])
  }

  emailMathces() {
    const email = this.accountDataForm.get('email')?.value;
    const confirmationEmail = this.accountDataForm.get('confirmationEmail')?.value;
    return email && confirmationEmail && email === confirmationEmail;
  }

  toogleButtonPin(){
    this.buttonPin.set(!this.buttonPin())
  }

  toogleConfirmationPin(){
    this.buttonConfirmationPin.set(!this.buttonConfirmationPin())
  }

}
