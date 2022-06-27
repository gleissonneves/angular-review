import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerTechComponent } from './banner-tech/banner-tech.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

import { CursosService } from './cursos.service';

import { CursosRoutingModule } from './cursos-routing.module';
import { WrapperContainerComponent } from 'src/app/shared/components/wrapper-container/wrapper-container.component';



@NgModule({
  declarations: [
    BannerTechComponent,
    WrapperContainerComponent,
    CursosComponent,
    CursoNaoEncontradoComponent,
    CursoDetalheComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
  ],
  exports: [],
  providers: [CursosService]
})
export class CursosModule { }
