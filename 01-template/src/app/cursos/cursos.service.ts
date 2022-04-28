import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  public getCursos() {
    return ["HTML", "CSS", "JavaScriptTest", "Unitário"]
  }
}
