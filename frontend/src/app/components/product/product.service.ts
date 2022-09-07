import { ProductResponse } from './product.model-response';
import { ProductRequest } from './product-request.model';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
      })
  }

  create(product: ProductRequest): Observable<ProductResponse> { 
     return this.http.post<ProductResponse>(this.baseUrl, product);
  }

  read(): Observable<ProductResponse[]> {
    return this.http.get<ProductResponse[]>(this.baseUrl);
  }

  readById(id: string): Observable<ProductResponse> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ProductResponse>(url);
  }

  update(product: ProductRequest): Observable<ProductResponse> { 
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<ProductResponse>(url, product);
 }

  delete(product: ProductRequest): Observable<Object> { 
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.delete(url);
 }

}
