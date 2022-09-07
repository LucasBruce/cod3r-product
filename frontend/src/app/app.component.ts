import { ProductResponse } from './components/product/product.model-response';
import { ProductService } from './components/product/product.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  /**
   *
   */
  constructor() {}
 
  nome = 'Maria';
}
