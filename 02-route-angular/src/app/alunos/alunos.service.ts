
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  getAlunos() {
    return [
      {
        id: 1,
        name: 'Teste 1',
        email: 'teste1@email.com',
        details: {
          gender: 'm',
          age: '20',
          interest: ['JavaScript', 'HTML', 'CSS']
        }
      }, {
        id: 2,
        name: 'Teste 2',
        email: 'teste2@email.com',
        details: {
          gender: 'm',
          age: '20',
          interest: ['JavaScript', 'HTML', 'CSS']
        }
      }, {
        id: 3,
        name: 'Teste 3',
        email: 'teste3@email.com',
        details: {
          gender: 'm',
          age: '20',
          interest: ['JavaScript', 'HTML', 'CSS']
        }
      }
    ];
  }

  findAlunoById(id: Number| String) {
    return this.getAlunos().find((element) => element.id == id ? element: false)
  }
}
