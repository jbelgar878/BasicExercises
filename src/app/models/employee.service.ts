import { Injectable } from '@angular/core';
import data from "../models/data.json"; // para que esto funcione hay que insertar en tsconfig.json  *< "resolveJsonModule": true, "esModuleInerop":true >* al final de compilerOptions
import {Employee} from "../models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [];

  constructor() { 
    this.employees = data;
  }

  submitEmployee(newEmployee:Employee) {
     
    this.employees.push(newEmployee);
  }

}
