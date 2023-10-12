import { Pagination, IData } from "../../types/types"

export interface IDataProductResponse {
  data: IData[];
  meta: Pagination;
}

export interface IDataSingleProductResponse {
  data: IData;
  meta: Pagination;
}

export interface IDataLayoutResponse {
  data: IData[];
  meta: Pagination;
}