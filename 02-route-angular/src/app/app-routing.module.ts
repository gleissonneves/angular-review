import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'cursos',
        loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
      },
    ]
  },
  { 
    path: 'login',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
