import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "https://www.google.com"
  imgURL: string = "http://lorempixel.com.br/200/200/?1";

  constructor() { }

  ngOnInit(): void {
  }

  getValue() {
    return 1
  }

}
