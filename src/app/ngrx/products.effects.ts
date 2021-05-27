import {Injectable} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  DeleteProductActionError,
  DeleteProductActionSuccess,
  EditProductActionError,
  EditProductActionSuccess,
  GetAllProductsActionError,
  GetAllProductsActionSuccess,
  GetAvailableProductsActionError,
  GetSelectedProductsActionError,
  GetSelectedProductsActionSuccess,
  NewProductActionSuccess,
  ProductsActions,
  ProductsActionTypes,
  SaveProductActionError,
  SaveProductActionSuccess,
  SearchProductsActionError,
  SearchProductsActionSuccess,
  SetSelectedProductActionError,
  SetSelectedProductActionSuccess,
  UpdateProductActionError,
  UpdateProductActionSuccess,

} from './products.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';

@Injectable()
export class ProductsEffects{

  constructor(private productService:ProductsService, private effectActions:Actions) {
  }


  /*Get All Products*/
  getAllProductsEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionTypes.GET_ALL_PRODUCTS),
      mergeMap((action:ProductsActions)=>{
        return this.productService.getProducts()
          .pipe(
            map((products)=>new GetAllProductsActionSuccess(products)),
            catchError((err)=>of (new GetAllProductsActionError(err.message)))
          )

      })
    )
  );

  /*Get selected Products*/
  getSelectedProductsEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionTypes.GET_SELECTED_PRODUCTS),
      mergeMap((action:ProductsActions)=>{
        return this.productService.getSelectedProducts()
          .pipe(
            map((products)=>new GetSelectedProductsActionSuccess(products)),
            catchError((err)=>of (new GetSelectedProductsActionError(err.message)))
          )

      })
    )
  );


  /*Get Available Products*/
  getAvailableProductsEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionTypes.GET_AVAILABLE_PRODUCTS),
      mergeMap((action:ProductsActions)=>{
        return this.productService.getAvailableProducts()
          .pipe(
            map((products)=>new GetSelectedProductsActionSuccess(products)),
            catchError((err)=>of (new GetAvailableProductsActionError(err.message)))
          )

      })
    )
  );

  /*Search Products*/
  searchProductsEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionTypes.SEARCH_PRODUCTS),
      mergeMap((action:ProductsActions)=>{
        return this.productService.searchProducts(action.payload)
          .pipe(
            map((products)=>new SearchProductsActionSuccess(products)),
            catchError((err)=>of (new SearchProductsActionError(err.message)))
          )

      })
    )
  );

  /*Set Selected Products*/
  setSelectedProductEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionTypes.SET_SELECTED_PRODUCT),
      mergeMap((action:ProductsActions)=>{
        return this.productService.setSelected(action.payload)
          .pipe(
            map((product)=>new SetSelectedProductActionSuccess(product)),
            catchError((err)=>of (new SetSelectedProductActionError(err.message)))
          )

      })
    )
  );


  /*Delete Products*/
  deleteProductEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionTypes.DELETE_PRODUCT),
      mergeMap((action:ProductsActions)=>{
        return this.productService.delete(action.payload.id)
          .pipe(
            map(()=>new DeleteProductActionSuccess(action.payload)),
            catchError((err)=>of (new DeleteProductActionError(err.message)))
          )

      })
    )
  );

  /*New Products*/
  newProductEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionTypes.NEW_PRODUCT),
            map((ProductsAction)=>{
              return new NewProductActionSuccess({});
      })
    )
  );


  /*Save Products*/
  saveProductEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionTypes.SAVE_PRODUCT),
      mergeMap((action:ProductsActions)=>{
        return this.productService.save(action.payload)
          .pipe(
            map((product)=>new SaveProductActionSuccess(product)),
            catchError((err)=>of (new SaveProductActionError(err.message)))
          )

      })
    )
  );

  /*Edit Products*/
  editProductEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionTypes.EDIT_PRODUCT),
      mergeMap((action:ProductsActions)=>{
        return this.productService.getProductById(action.payload)
          .pipe(
            map((product)=>new EditProductActionSuccess(product)),
            catchError((err)=>of (new EditProductActionError(err.message)))
          )

      })
    )
  );

  /*Update Products*/
  updateProductEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionTypes.UPDATE_PRODUCT),
      mergeMap((action:ProductsActions)=>{
        return this.productService.update(action.payload)
          .pipe(
            map((product)=>new UpdateProductActionSuccess(product)),
            catchError((err)=>of (new UpdateProductActionError(err.message)))
          )

      })
    )
  );
}
