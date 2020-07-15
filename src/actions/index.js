
import products from "../apis/products";
import {FETCH_PRODUCTS} from "./types";

export const fetchProducts = () => async dispatch =>{
    const  response = await products.get('/api/products/');

    dispatch({type:FETCH_PRODUCTS,payload:response.data});
};