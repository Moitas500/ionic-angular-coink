import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public isFieldOneEqualFieldTwo(field1: string, field2: string, name: ValidationErrors) {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(field1)?.value || ''
      const fieldValue2 = formGroup.get(field2)?.value || ''

      if (fieldValue1 !== fieldValue2) {
        formGroup.get(field2)?.setErrors(name)
        return name
      }

      formGroup.get(field2)?.setErrors(null)
      return null
    }
  }

}
