import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pag: any;

  constructor(
    private cursosService: CursosService,
    private baseRouter: Router,
    private router: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.router.queryParams.subscribe((items) => {
      this.pag = items['pagina'];
    }); 
  }

  proximaPag() {
    this.pag++;
    this.baseRouter.navigate(['cursos'], { queryParams: { pagina: this.pag}})
  }


  voltarPag() {
    if (this.pag >= 2) {
      this.pag--;
      this.baseRouter.navigate(['cursos'], { queryParams: { pagina: this.pag}})
      return
    }
  }
}
