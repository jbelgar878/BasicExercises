import { Component } from '@angular/core';
import {Employee} from "../../models/employee";
import {NgForOf} from "@angular/common";
import data from "../../models/data.json"; // para que esto funcione hay que insertar en tsconfig.json  *< "resolveJsonModule": true, "esModuleInerop":true >* al final de compilerOptions

@Component({
  selector: 'app-ex09',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './ex09.component.html'
})
export class Ex09Component {

 // EMPLOYEE_LIST = data as Employee[];
  employees: Employee[] = [];

  constructor() { }

  ngOnInit(): void {
    this.employees = data;
    
  }

  //  sortEmployeeN ( ){ 
  //    this.employees.sort((a,b) => (a.name > b.name) ? 1 : -1);
  //  }
  //  sortEmployeeP ( ){ 
  //    this.employees.sort((a,b) => (a.position > b.position) ? 1 : -1);
  //  }
  //  sortEmployeeS ( ){ 
  //    this.employees.sort((a,b) => (a.salary > b.salary) ? -1 : 1);
  //  }

   sortEmployee(keyEX : keyof Employee){
    this.employees.sort((a:Employee, b:Employee) => a[keyEX] > b[keyEX] ? -1 : 1)
   }
}
