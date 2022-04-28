import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WrapperContainerComponent } from './wrapper-container/wrapper-container.component';


@NgModule({
  declarations: [
    WrapperContainerComponent,
  ],
  exports: [
    WrapperContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }
