import { ProductService } from './../product.service';
import { ProductResponse } from './../product.model-response';
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable } from "@angular/material/table";
import { ProductRead2DataSource } from './product-read2-datasource';


@Component({
  selector: 'app-product-read2',
  templateUrl: './product-read2.component.html',
  styleUrls: ['./product-read2.component.css']
})
export class ProductRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatTable)
  table!: MatTable<ProductResponse>;
  dataSource: ProductRead2DataSource = new ProductRead2DataSource();
  productResp: ProductResponse[] = [];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price'];

  /**
   *
   */
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.read().subscribe(product => {
      this.productResp = product; 
      console.log("data1..."+this.productResp);
    })
    console.log("data5..."+this.productResp);
  }

  ngAfterViewInit() {
    console.log("data2..."+this.dataSource.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}