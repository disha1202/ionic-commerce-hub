import api from '@/api';

const fetchProducts = async (query: any): Promise <any>  => {
  return api({
   // TODO: We can replace this with any API
    url: "searchProducts", 
    method: "post",
    data: query,
    cache: true
  });
}

const getProducts = async (payload: any): Promise<any> => {
  return api({
    url: "/solr-query",
    method: "POST",
    data: payload
  })
}

const getFacility = async (payload: any): Promise<any> => {
  return api({
    url: "/performFind",
    method: "post",
    data: payload
  });
}

export const ProductService = {
  fetchProducts,
  getProducts,
  getFacility
}