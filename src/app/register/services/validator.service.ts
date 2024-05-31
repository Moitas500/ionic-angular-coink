import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors, AbstractControl, ValidatorFn, Form } from '@angular/forms';

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

  public dateValidator(field: string, name: ValidationErrors) {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const fieldValue = formGroup.get(field)?.value || ''
      const DATE_REGEX = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;

      if (fieldValue === '') return null

      if (!DATE_REGEX.test(fieldValue)) {
        return name;
      }

      const parts = fieldValue.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Month is zero-based in JavaScript
      const year = parseInt(parts[2], 10);

      const date = new Date(year, month, day);
      if (date.getFullYear() === year && date.getMonth() === month && date.getDate() === day) {
        formGroup.get(field)?.setErrors(null)
        return null;
      }

      return name;
    }
  }

}
