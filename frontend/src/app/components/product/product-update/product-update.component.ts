import { ProductResponse } from './../product.model-response';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(private productService: ProductService,
    private router: Router, private route: ActivatedRoute) { }

  product: ProductResponse = {
    id: 1,
    name: 'Lucas',
    price: 1.50
  };

  id!: string;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id !== null ? id : '';
    this.productService.readById(this.id).subscribe(product => {
      this.product = product
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
