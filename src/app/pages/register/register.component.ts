import { ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { securePasswordValidator } from '../../core/validators/secure-password-validator';
import { passwordMatchValidator } from '../../core/validators/password-match-validator';
import { FormControlErrorsComponent } from "../../shared/components/form-control-errors/form-control-errors.component";
import { ageOver13Validator } from '../../core/validators/age-over-13-validator';
import { timeInterval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, FormControlErrorsComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  confirmationDialog = viewChild<ElementRef<HTMLDialogElement>>('confirmationDialog');

  form = this.formBuilder.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [securePasswordValidator]],
    passwordConfirmation: ['', Validators.required],
    birthdate: ['', [Validators.required, ageOver13Validator]],
    address: [''],
  }, { validators: passwordMatchValidator });

  register() {
    if (!this.form.valid)
      return;
    
    this.confirmationDialog()?.nativeElement.showModal();

    setTimeout(() => {
      this.router.navigate(['/'])
    }, 2000);
  }
}
