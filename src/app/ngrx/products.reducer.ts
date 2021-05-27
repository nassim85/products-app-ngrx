import {Product} from '../model/product.model';
import {ProductsActions, ProductsActionTypes} from './products.actions';
import {Action} from '@ngrx/store';

export enum ProductsStateEnum{
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial",
  NEW="New",
  EDIT="Edit",
  UPDATED="Updated"
}
export interface ProductsState{
  products:Product[],
  errorMessage:string,
  dataState:ProductsStateEnum,
  currentProduct:Product|null,
}

const initState:ProductsState={
  products:[],
  errorMessage:"",
  dataState:ProductsStateEnum.INITIAL,
  currentProduct:null,
}
export function productsReducer(state=initState, action: Action):ProductsState{
  switch (action.type){

    /*Get all Products*/
    case ProductsActionTypes.GET_ALL_PRODUCTS:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case ProductsActionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
    case ProductsActionTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}


    /*Get Selected Products*/
    case ProductsActionTypes.GET_SELECTED_PRODUCTS:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case ProductsActionTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
    case ProductsActionTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}

    /*Get Available Products*/
    case ProductsActionTypes.GET_AVAILABLE_PRODUCTS:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case ProductsActionTypes.GET_AVAILABLE_PRODUCTS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
    case ProductsActionTypes.GET_AVAILABLE_PRODUCTS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}


    /*Search Products*/
    case ProductsActionTypes.SEARCH_PRODUCTS:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case ProductsActionTypes.SEARCH_PRODUCTS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
    case ProductsActionTypes.SEARCH_PRODUCTS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}

    /*Set Selected Products*/
    case ProductsActionTypes.SET_SELECTED_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case ProductsActionTypes.SET_SELECTED_PRODUCT_SUCCESS:
      let product:Product=(<ProductsActions>action).payload
      let listProducts=[...state.products];
      let data:Product[]=listProducts.map(p=>p.id==product.id?product:p);
      return {...state, dataState:ProductsStateEnum.LOADED, products:data}
    case ProductsActionTypes.SET_SELECTED_PRODUCT_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}


    /*DeleteProducts*/
    case ProductsActionTypes.DELETE_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case ProductsActionTypes.DELETE_PRODUCT_SUCCESS:
      let p:Product=(<ProductsActions>action).payload;
      let index=state.products.indexOf(p);
      let productsList=[...state.products];
      productsList.splice(index,1);
      return {...state, dataState:ProductsStateEnum.LOADED, products:productsList}
    case ProductsActionTypes.DELETE_PRODUCT_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}

    /*NewProducts*/
    case ProductsActionTypes.NEW_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case ProductsActionTypes.NEW_PRODUCT_SUCCESS:
      return {...state, dataState:ProductsStateEnum.NEW}
    case ProductsActionTypes.NEW_PRODUCT_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}


    /*Save Products*/
    case ProductsActionTypes.SAVE_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case ProductsActionTypes.SAVE_PRODUCT_SUCCESS:
      let prods:Product[]=[...state.products];
      prods.push((<ProductsActions>action).payload);
      return {...state, dataState:ProductsStateEnum.LOADED, products:prods}
    case ProductsActionTypes.SAVE_PRODUCT_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}

    /*Edit Products*/
    case ProductsActionTypes.EDIT_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case ProductsActionTypes.EDIT_PRODUCT_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, currentProduct:(<ProductsActions>action).payload}
    case ProductsActionTypes.EDIT_PRODUCT_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}

    /*Update Products*/
    case ProductsActionTypes.UPDATE_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case ProductsActionTypes.UPDATE_PRODUCT_SUCCESS:
      let updateProduct:Product=(<ProductsActions>action).payload;
      let updateProducts=state.products.map(p=>(p.id==updateProduct.id)?updateProduct:p);
      return {...state, dataState:ProductsStateEnum.UPDATED, products:updateProducts}
    case ProductsActionTypes.UPDATE_PRODUCT_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}

    default: return {...state}
  }
}
