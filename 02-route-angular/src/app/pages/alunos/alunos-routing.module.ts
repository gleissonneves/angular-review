import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AlunosComponent } from "./alunos.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";


const router: Routes = [
  {
    path: "alunos",
    component: AlunosComponent,
    children: [
      { path: "criar", component: AlunoFormComponent },
      { path: ":id", component: AlunoDetalheComponent },
      { path: ":id/editar", component: AlunoFormComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})
export class AlunosRoutingModule {}
