import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nameBlog: string;
  cursos: string[];

  constructor(public cursosService: CursosService) {
    this.nameBlog = "Meu blog";
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {
  }

}
