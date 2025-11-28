import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { RateComponent, RateOptions } from '../rate/rate.component';

export function checkRegExp(regExp: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = regExp.test(control.value);
    return !forbidden ? { forbiddenValue: { value: control.value } } : null;
  };
}

export const conformPassword: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return control.value.password_one === control.value.password_two
    ? null
    : { PasswordDoNotMatch: true };
};

interface TemplateFormI {
  login: string,
  email: string,
  password: string
}

@Component({
  selector: 'app-forms',
  standalone: true,
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RateComponent],
})
export class FormsComponent implements OnInit {

  public templateForm : TemplateFormI = {
    login: 'Ragif1',
    email: '',
    password: ''
  }

  constructor(private _fb: FormBuilder) {}

  public get skills(): FormArray {
    return this.fbForm.get('skills') as FormArray
  }

  public fbForm!: FormGroup;

  public myForm = new FormGroup({
    login: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  public validatorsForm = new FormGroup(
    {
      mail: new FormControl(
        '',
        checkRegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
      ),
      password_one: new FormControl(''),
      password_two: new FormControl(''),
    },
    conformPassword
  );
  
  ngOnInit(): void {
    this.fbForm = this._fb.group({
      name: ['Ragif'],
      skills: this._fb.array([]),
    });
  }
  
  public customForm = this._fb.group(
    rate:[2]
  )

  public ratesOptions: RateOptions = {
    rates: 5,
    text: 'Ocenite nash kurs po Angular'
  }

  public handleValue() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      alert('Form is not valid');
    }
  }

  public newSkill(): FormGroup {
    return this._fb.group({
      skill: '',
      expirience: '',
    })
  }

  public addSkill(): void{
    this.skills.push(this.newSkill())
  }

  public removeSkill(i: number): void{
    this.skills.removeAt(i);
  }

  public onSubmit() {
    console.log(this.fbForm.value);
  }
}
