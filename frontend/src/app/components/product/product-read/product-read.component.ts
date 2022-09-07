import { ProductResponse } from './../product.model-response';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { DialogAnimationsExampleDialogComponent } from '../../modal/dialog-animations-example-dialog/dialog-animations-example-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: ProductResponse[] = [];

  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService,
                            public dialog: MatDialog) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

  openDialog() {
    this.dialog.open(DialogAnimationsExampleDialogComponent);
  }

}
