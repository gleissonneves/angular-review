import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos-routing.module';

import { ComponentModule } from '../component/component.module';
import { AlunosService } from './alunos.service';


@NgModule({
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent,
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    ComponentModule
  ],
  providers: [AlunosService]
})
export class AlunosModule { }
