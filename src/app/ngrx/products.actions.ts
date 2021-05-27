import {Action} from '@ngrx/store';
import {Product} from '../model/product.model';


export enum ProductsActionTypes{

  /*Get All Products*/
  GET_ALL_PRODUCTS="[Products] Get All products",
  GET_ALL_PRODUCTS_SUCCESS="[Products] Get All products Success",
  GET_ALL_PRODUCTS_ERROR="[Products] Get All products Error",


  /*Get Selected Products*/
  GET_SELECTED_PRODUCTS="[Products] Get Selected products",
  GET_SELECTED_PRODUCTS_SUCCESS="[Products] Get Selected products Success",
  GET_SELECTED_PRODUCTS_ERROR="[Products] Get Selected products Error",

  /*Get Available  Products*/
  GET_AVAILABLE_PRODUCTS="[Products] Get Available products",
  GET_AVAILABLE_PRODUCTS_SUCCESS="[Products] Get Available products Success",
  GET_AVAILABLE_PRODUCTS_ERROR="[Products] Get Available products Error",

  /*Search  Products*/
  SEARCH_PRODUCTS="[Products] Search products",
  SEARCH_PRODUCTS_SUCCESS="[Products] Search products Success",
  SEARCH_PRODUCTS_ERROR="[Products] Search products Error",

  /*Select Products*/
  SET_SELECTED_PRODUCT="[Product] Set Selected product",
  SET_SELECTED_PRODUCT_SUCCESS="[Product] Set Selected  product Success",
  SET_SELECTED_PRODUCT_ERROR="[Product] Set Selected  product Error",

  /*Delete Products*/
  DELETE_PRODUCT="[Product] Delete product",
  DELETE_PRODUCT_SUCCESS="[Product] Delete product Success",
  DELETE_PRODUCT_ERROR="[Product] Delete  product Error",

  /*New Products*/
  NEW_PRODUCT="[Product] New product",
  NEW_PRODUCT_SUCCESS="[Product] New product Success",
  NEW_PRODUCT_ERROR="[Product] New  product Error",

  /*Save Products*/
  SAVE_PRODUCT="[Product] Save product",
  SAVE_PRODUCT_SUCCESS="[Product] Save product Success",
  SAVE_PRODUCT_ERROR="[Product] Save  product Error",

  /*Edit Products*/
  EDIT_PRODUCT="[Product] Edit product",
  EDIT_PRODUCT_SUCCESS="[Product] Edit product Success",
  EDIT_PRODUCT_ERROR="[Product] Edit  product Error",

  /*Update Products*/
  UPDATE_PRODUCT="[Product] Update product",
  UPDATE_PRODUCT_SUCCESS="[Product] Update product Success",
  UPDATE_PRODUCT_ERROR="[Product] Update  product Error",
}


/*Get All Products*/
export class GetAllProductsAction implements Action {
  type: ProductsActionTypes= ProductsActionTypes.GET_ALL_PRODUCTS;
  constructor(public payload:any) {
  }
}

export class GetAllProductsActionSuccess implements Action {
  type: ProductsActionTypes= ProductsActionTypes.GET_ALL_PRODUCTS_SUCCESS
  constructor(public payload:Product[]) {
  }
}

export class GetAllProductsActionError implements Action {
  type: ProductsActionTypes= ProductsActionTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}

/* Get Selected Product*/

export class GetSelectedProductsAction implements Action {
  type: ProductsActionTypes= ProductsActionTypes.GET_SELECTED_PRODUCTS;
  constructor(public payload:any) {
  }
}

export class GetSelectedProductsActionSuccess implements Action {
  type: ProductsActionTypes= ProductsActionTypes.GET_SELECTED_PRODUCTS_SUCCESS
  constructor(public payload:Product[]) {
  }
}

export class GetSelectedProductsActionError implements Action {
  type: ProductsActionTypes= ProductsActionTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}

/* Get Available Product*/

export class GetAvailableProductsAction implements Action {
  type: ProductsActionTypes= ProductsActionTypes.GET_AVAILABLE_PRODUCTS;
  constructor(public payload:any) {
  }
}

export class GetAvailableProductsActionSuccess implements Action {
  type: ProductsActionTypes= ProductsActionTypes.GET_AVAILABLE_PRODUCTS_SUCCESS
  constructor(public payload:Product[]) {
  }
}

export class GetAvailableProductsActionError implements Action {
  type: ProductsActionTypes= ProductsActionTypes.GET_AVAILABLE_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}


/* Search Product*/

export class SearchProductsAction implements Action {
  type: ProductsActionTypes= ProductsActionTypes.SEARCH_PRODUCTS;
  constructor(public payload:string) {
  }
}

export class SearchProductsActionSuccess implements Action {
  type: ProductsActionTypes= ProductsActionTypes.SEARCH_PRODUCTS_SUCCESS
  constructor(public payload:Product[]) {
  }
}

export class SearchProductsActionError implements Action {
  type: ProductsActionTypes= ProductsActionTypes.SEARCH_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}

/* Set selected Product*/

export class SetSelectedProductAction implements Action {
  type: ProductsActionTypes= ProductsActionTypes.SET_SELECTED_PRODUCT;
  constructor(public payload:Product) {
  }
}

export class SetSelectedProductActionSuccess implements Action {
  type: ProductsActionTypes= ProductsActionTypes.SET_SELECTED_PRODUCT_SUCCESS
  constructor(public payload:Product) {
  }
}

export class SetSelectedProductActionError implements Action {
  type: ProductsActionTypes= ProductsActionTypes.SET_SELECTED_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}

/* Delete Product*/

export class DeleteProductAction implements Action {
  type: ProductsActionTypes= ProductsActionTypes.DELETE_PRODUCT;
  constructor(public payload:Product) {
  }
}

export class DeleteProductActionSuccess implements Action {
  type: ProductsActionTypes= ProductsActionTypes.DELETE_PRODUCT_SUCCESS
  constructor(public payload:Product) {
  }
}

export class DeleteProductActionError implements Action {
  type: ProductsActionTypes= ProductsActionTypes.DELETE_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}


/* New Product*/

export class NewProductAction implements Action {
  type: ProductsActionTypes= ProductsActionTypes.NEW_PRODUCT;
  constructor(public payload:any) {
  }
}

export class NewProductActionSuccess implements Action {
  type: ProductsActionTypes= ProductsActionTypes.NEW_PRODUCT_SUCCESS
  constructor(public payload:any) {
  }
}

export class NewProductActionError implements Action {
  type: ProductsActionTypes= ProductsActionTypes.NEW_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}


/* Save Product*/

export class SaveProductAction implements Action {
  type: ProductsActionTypes= ProductsActionTypes.SAVE_PRODUCT;
  constructor(public payload:Product) {
  }
}

export class SaveProductActionSuccess implements Action {
  type: ProductsActionTypes= ProductsActionTypes.SAVE_PRODUCT_SUCCESS
  constructor(public payload:Product) {
  }
}

export class SaveProductActionError implements Action {
  type: ProductsActionTypes= ProductsActionTypes.SAVE_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}

/* Edit Product*/

export class EditProductAction implements Action {
  type: ProductsActionTypes= ProductsActionTypes.EDIT_PRODUCT;
  constructor(public payload:number) {
  }
}

export class EditProductActionSuccess implements Action {
  type: ProductsActionTypes= ProductsActionTypes.EDIT_PRODUCT_SUCCESS
  constructor(public payload:Product) {
  }
}

export class EditProductActionError implements Action {
  type: ProductsActionTypes= ProductsActionTypes.EDIT_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}

/* Update Product*/

export class UpdateProductAction implements Action {
  type: ProductsActionTypes= ProductsActionTypes.UPDATE_PRODUCT;
  constructor(public payload:number) {
  }
}

export class UpdateProductActionSuccess implements Action {
  type: ProductsActionTypes= ProductsActionTypes.UPDATE_PRODUCT_SUCCESS
  constructor(public payload:Product) {
  }
}

export class UpdateProductActionError implements Action {
  type: ProductsActionTypes= ProductsActionTypes.UPDATE_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}

export type ProductsActions=
  GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError
  |GetSelectedProductsAction|GetSelectedProductsActionSuccess|GetSelectedProductsActionError
  |GetAvailableProductsAction|GetAvailableProductsActionError|GetAllProductsActionSuccess
  |SearchProductsAction|SearchProductsActionError|SearchProductsActionSuccess
  |SetSelectedProductAction|SetSelectedProductActionSuccess|SetSelectedProductActionError
  |DeleteProductAction|DeleteProductActionSuccess|DeleteProductActionError
  |NewProductAction|NewProductActionSuccess|NewProductActionError
  |SaveProductAction|SaveProductActionSuccess|SaveProductActionError
  |EditProductAction|EditProductActionSuccess|EditProductActionError
  |UpdateProductAction|UpdateProductActionSuccess|UpdateProductActionError
  ;
