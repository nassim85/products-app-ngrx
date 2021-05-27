import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../model/product.model';
import {DeleteProductAction, GetAvailableProductsAction, SetSelectedProductAction} from '../../../../ngrx/products.actions';
import {Store} from '@ngrx/store';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {

  @Input() product:Product|null=null;
  constructor(private store:Store<any>, private router:Router) { }

  ngOnInit(): void {
  }


  onSelect(product: Product) {
    this.store.dispatch(new SetSelectedProductAction(product));
  }

  onDelete(product: Product) {
    this.store.dispatch(new DeleteProductAction(product));
  }

  onEdit(product: Product) {
    this.router.navigateByUrl("/editProduct/"+ product.id);
  }
}
