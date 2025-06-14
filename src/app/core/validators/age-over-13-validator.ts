import { AbstractControl, ValidationErrors } from '@angular/forms';

export function ageOver13Validator(control: AbstractControl): ValidationErrors | null {
  const birthdate = control.value as string; 

  if (!birthdate) {
    return null; 
  }

  const today = new Date();
  const birthDate = new Date(birthdate);
  
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  if (age < 13) {
    return { ageunder13: true };
  }

  return null;
}