import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';

@Injectable({providedIn:"root"})

export class ProductsService{
  constructor(private http:HttpClient) {
  }

  public getProducts() : Observable<Product[]>{
    let host=Math.random()>0.2?environment.host:environment.unreachableHost;
    //let host=environment.host;
    return this.http.get<Product[]>(host+"/products");
  }

  public getSelectedProducts() : Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?selected=true");
  }

  public getAvailableProducts() : Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?available=true");
  }

  public searchProducts(name:string) : Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/Products?name_like=" + name);
  }

 public setSelected(product: Product) : Observable<Product>{
    let host=environment.host;
    //product.selected=!product.selected;
    return this.http.put<Product>(host+"/products/"+ product.id, {...product, selected:!product.selected});
  }

  /*
   select(product: Product) : Observable<Product>{
    let host=environment.host;
    product.selected=!product.selected;
    return this.http.put<Product>(host+"/products/"+ product.id, product);
  }

  */

  public delete(id:number) : Observable<void>{
    let host=environment.host;

    return this.http.delete<void>(host+"/products/"+id);
  }

  public save(product: Product) : Observable<Product>{
    let host=environment.host;
    return this.http.post<Product>(host+"/products/", product);
  }

  public getProductById(id:number) : Observable<Product>{
    let host=environment.host;
    return this.http.get<Product>(host+"/products/"+id);
  }

  public update(product: Product) : Observable<Product>{
    let host=environment.host;
    return this.http.put<Product>(host+"/products/"+product.id, product);
  }

}
