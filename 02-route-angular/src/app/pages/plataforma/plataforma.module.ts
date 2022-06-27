import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlataformaRoutingModule } from './plataforma-routing.module';
import { PlataformaComponent } from './plataforma.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';


@NgModule({
  declarations: [
    PlataformaComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PlataformaRoutingModule
  ]
})
export class PlataformaModule { }
