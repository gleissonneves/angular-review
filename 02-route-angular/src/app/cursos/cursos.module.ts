import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerTechComponent } from './banner-tech/banner-tech.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

import { CursosService } from './cursos.service';

import { ComponentModule } from '../component/component.module';
import { CursosRoutingModule } from './cursos-routing.module';



@NgModule({
  declarations: [
    CursosComponent,
    CursoNaoEncontradoComponent,
    CursoDetalheComponent,
    BannerTechComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    ComponentModule
  ],
  exports: [],
  providers: [CursosService]
})
export class CursosModule { }
