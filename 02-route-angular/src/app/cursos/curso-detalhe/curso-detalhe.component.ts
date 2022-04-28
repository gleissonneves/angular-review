import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: string = '';
  curso: any;

  constructor(
      private route: ActivatedRoute,
      private baseRouter: Router,
      private cursosService: CursosService
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    });

    this.showCurseById();
    this.redirectCurseNotFound();
  }

  showCurseById() {
    this.curso = this.cursosService.findCursoById(this.id);
  }

  redirectCurseNotFound() {
    if (!this.curso) {
      this.baseRouter.navigate(['nao-encontrado']);
    }

    return;
  }
}
