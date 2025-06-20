import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render form', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });
  
  it('should initialize form group', () => {
    expect(component.form).toBeTruthy();
  })

  it('should initialize form group with required fields', () => {
    expect(component.form.get('name')).toBeTruthy();
    expect(component.form.get('lastName')).toBeTruthy();
    expect(component.form.get('username')).toBeTruthy();
    expect(component.form.get('email')).toBeTruthy();
    expect(component.form.get('password')).toBeTruthy();
    expect(component.form.get('passwordConfirmation')).toBeTruthy();
    expect(component.form.get('birthdate')).toBeTruthy();
    expect(component.form.get('address')).toBeTruthy();
  })

  it('should invalidate insecure passwords', () => {
    component.form.get('password')?.setValue('123456');

    expect(component.form.get('password')?.valid).toBeFalsy();
  })
});
