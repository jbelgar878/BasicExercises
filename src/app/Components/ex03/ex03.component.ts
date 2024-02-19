import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex03',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex03.component.html',
  styleUrl: './ex03.component.css'
})
export class Ex03Component {

  n: number = 0;
  t: string = "";
  constructor() { }

  ngOnInit(): void {
    this.n = Math.floor(Math.random() * 10 + 1);

     if(this.n < 5){
       this.t = "suspenso";
     }else if(this.n>8){
       this.t = "aprobado";
     }else{
       this.t = "inmejorable";
    }
  }
}


