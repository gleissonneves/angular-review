import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-tech',
  templateUrl: './banner-tech.component.html',
  styleUrls: ['./banner-tech.component.css']
})
export class BannerTechComponent implements OnInit {

  @Input() backgroundColor: string;
  @Input() titulo: string;
  @Input() cargaHoraria: string;

  constructor() { }

  ngOnInit(): void {
  }

}
