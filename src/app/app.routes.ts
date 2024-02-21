import { Routes } from '@angular/router';
import { Ex01Component } from './Components/ex01/ex01.component';
import { Ex02Component } from './Components/ex02/ex02.component';
import { Ex03Component } from './Components/ex03/ex03.component';
import { Ex04Component } from './Components/ex04/ex04.component';
import { Ex05Component } from './Components/ex05/ex05.component';
import { Ex06Component } from './Components/ex06/ex06.component';
import { Ex07Component } from './Components/ex07/ex07.component';
import { Ex08Component } from './Components/ex08/ex08.component';
import { Ex09Component } from './Components/ex09/ex09.component';
import { Ex10Component } from './Components/ex10/ex10.component';
import { ExamenComponent } from './Components/examen/examen.component';

export const routes: Routes = [
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path:'ej1', component: Ex01Component},
    { path: 'ej2', component: Ex02Component},
    { path: 'ej3', component: Ex03Component},
    { path: 'ej4', component: Ex04Component},
    { path: 'ej5', component: Ex05Component},
    { path: 'ej6', component: Ex06Component},
    { path: 'ej7', component: Ex07Component},
    { path: 'ej8', component: Ex08Component},
    { path: 'ej9', component: Ex09Component},
    { path: 'ej10', component: Ex10Component},
    {path: 'examen',component:ExamenComponent},

    
];
