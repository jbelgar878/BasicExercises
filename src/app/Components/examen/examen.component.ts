import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from '../../models/employee.service';
import {Employee} from "../../models/employee";




@Component({
  selector: 'app-examen',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, ],
  template:`
<section class="listing-apply">
      <form [formGroup]="applyForm" (submit)="submitAplication()">
        <label for="name">Name</label>
        <input id="name" type="text" formControlName="name" ngModel required>
        <div *ngIf="applyForm.get('name')?.errors && applyForm.get('name')?.dirty">
          <p class="error">name is required</p>
        </div>

        <label for="position">position</label>
        <input id="position" type="text" formControlName="position" ngModel required>
        <div *ngIf="applyForm.get('position')?.errors && applyForm.get('position')?.dirty">
          <p class="error">position is required</p>
        </div> 

        <label for="salary">salary</label>
        <input id="salary" type="number" formControlName="salary" ngModel required>
        <div *ngIf="applyForm.get('salary')?.errors && applyForm.get('salary')?.dirty">
          <p class="error">salary is required</p>
          <p class="error" *ngIf="applyForm.get('salary')?.errors?.['salary']">Email is invalid</p>
        </div>

        <label for="deAlta">esta de Alta</label>
        <input id="deAlta" type="checkbox" formControlName="deAlta" >

        <button type="submit" class="primary"  [disabled]="applyForm.invalid">>Apply now</button>
      </form>
    </section>

  
  `,
  styleUrl: './examen.component.css'
})
export class ExamenComponent {
  employeeSvc = inject(EmployeeService)
  newEmployee: Employee | undefined ;


  applyForm = new FormGroup({
    name: new FormControl(''),
    position: new FormControl(''),
    salary: new FormControl(),
    deAlta: new FormControl(),
  });

  constructor(private fb: FormBuilder) {
    this.applyForm = this.fb.group({
      name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      deAlta: [''],
    });
  }

   submitAplication(){
     const formData = {
       name: this.applyForm.value.name ?? '',
       position: this.applyForm.value.position ?? '',
       salary: this.applyForm.value.salary ?? '',
      deAlta: this.applyForm.value.deAlta ?? '',
     };

     this.newEmployee = {
      name: formData.name,
      position: formData.position,
      salary: formData.salary,
      deAlta: formData.deAlta,
     }

     this.employeeSvc.submitEmployee(this.newEmployee);


    }
  

 }
