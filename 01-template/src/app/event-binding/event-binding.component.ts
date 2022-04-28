import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  oiMundo() {
    alert('eventooooooo feito');
  }

  passandoEvento(event:any) {
    console.log(event)
  }

  onKeyup(event: any) {
    console.log(event.target.value)
  }
}
