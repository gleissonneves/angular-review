import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  id: string;
  alunos: any;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param['id'];

      this.alunos = this.showCurseById()
    });
  }

  showCurseById() {
    return this.alunosService.findAlunoById(this.id);
  }
}
