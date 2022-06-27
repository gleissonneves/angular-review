import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlataformaComponent } from './plataforma.component';

const routes: Routes = [
  {
    path: '',
    component: PlataformaComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home-routing.module')
          .then(m => m.HomeRoutingModule)
      },
      {
        path: 'cursos',
        loadChildren: () => import('../cursos/cursos-routing.module')
          .then(m => m.CursosRoutingModule)
      },
      {
        path: 'alunos',
        loadChildren: () => import('../cursos/cursos-routing.module')
          .then(m => m.CursosRoutingModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlataformaRoutingModule { }
