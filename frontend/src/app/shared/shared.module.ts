import { ApenasNumerosPipe } from './../pipes/apenas-numeros.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ApenasNumerosPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ApenasNumerosPipe
  ]
})
export class SharedModule { }
