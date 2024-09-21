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
  public isDocumentsCharge: WritableSignal<boolean> = signal(false)
  public isGendersCharge: WritableSignal<boolean> = signal(false)
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

  ngOnInit() {
    this.formAccountService.getTypeDocuments().subscribe(typeDocuments => {
      this.isDocumentsCharge.set(true)
      this.typeDocuments.set(typeDocuments)
    })

    this.formAccountService.getGenders().subscribe(genders => {
      this.isGendersCharge.set(true)
      this.genders.set(genders)
    })

    this.createForm()
  }

  createForm() {
    this.accountDataForm = this.fb.group({
        typeDocument: ['', Validators.required],
        numDocument: ['', Validators.required],
        expDocument: ['', [Validators.required]],
        birthday: ['', [Validators.required]],
        gender: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        confirmationEmail: ['', [Validators.required, Validators.email],],
        pin: ['', Validators.required],
        confirmationPIN: ['', Validators.required]
      },
      {
        validators: [
          this.validatorService.isFieldOneEqualFieldTwo(
            'email', 'confirmationEmail', { emailError: true }
          ),
          this.validatorService.isFieldOneEqualFieldTwo(
            'pin', 'confirmationPIN', { pinError: true }
          ),
          this.validatorService.dateValidator(
            'expDocument', { dateExpError: true }
          ),
          this.validatorService.dateValidator(
            'birthday', { dateBirthError: true }
          ),
        ]
      }
    )
  }

  onSubmit() {
    if ( this.accountDataForm.invalid ) {
      return
    }

    this.userService.setUser(
      {
        typeDocument: this.accountDataForm.get('typeDocument')?.value,
        birthdate: this.accountDataForm.get('birthday')?.value,
        expDocument: this.accountDataForm.get('expDocument')?.value,
        gender: this.accountDataForm.get('gender')?.value,
        numberDocument: this.accountDataForm.get('numDocument')?.value
      }
    )
    this.userService.setAccount({
      email: this.accountDataForm.get('email')?.value,
      pin: this.accountDataForm.get('pin')?.value,
    })

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
