import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      {
        id: 1,
        nome: "Cursos de C#",
        cargaHoraria: "40h",
        bannerCor: '#934B8F',
        descricao: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam convallis nulla eget tincidunt accumsan.
        Sed at luctus eros, vitae lobortis orci.
        Cras quis rhoncus nisl`
      },
      {
        id: 2,
        nome: "Cursos de C++",
        cargaHoraria: "20h",
        bannerCor: '#5F92C7',
        descricao: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam convallis nulla eget tincidunt accumsan.
        Sed at luctus eros, vitae lobortis orci.
        Cras quis rhoncus nisl`
      },
      {
        id: 3,
        nome: "Cursos de Python",
        cargaHoraria: "10h",
        bannerCor: '#2978A9',
        descricao: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam convallis nulla eget tincidunt accumsan.
        Sed at luctus eros, vitae lobortis orci.
        Cras quis rhoncus nisl`
      },
      {
        id: 4,
        nome: "Cursos de JavaScript",
        cargaHoraria: "40h",
        bannerCor: '#EEC855',
        descricao: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam convallis nulla eget tincidunt accumsan.
        Sed at luctus eros, vitae lobortis orci.
        Cras quis rhoncus nisl`
      },
    ]
  }

  findCursoById(id: Number| String) {
    return this.getCursos().find((element) => element.id == id ? element: false)
  }
}
