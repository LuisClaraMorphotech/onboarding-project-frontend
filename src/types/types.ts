interface MetaImage {
  data: {
      id: number;
      attributes: {
          name: string;
          alternativeText: null | string;
          url: string;
      };
  };
}

interface Block {
  id: number;
  __component: string;
  heading?: string;
  text?: string;
  link?: {
      id: number;
      title: string;
      link: string;
      isExternal: boolean;
      type: string;
  };
  card?: {
      id: number;
      heading: string;
      description: string;
      image: {
          data: {
              id: number;
              attributes: {
                  name: string;
                  alternativeText: null | string;
                  url: string;
              };
          };
      };
  }[];
  name?: string;
  description?: string;
  planType?: string;
  planPrice?: string;
  isFeatured?: boolean;
  services?: {
      data: {
          id: number;
          attributes: {
              name: string;
              description: string;
              createdAt: string;
              updatedAt: string;
          };
      }[];
  };
  form?: {
      id: number;
      heading: string;
      description: string;
      input: {
          id: number;
          placeholder: string;
          label: string;
          inputType: string;
      }[];
      button: {
          id: number;
          title: string;
          link: string;
          isExternal: boolean;
          type: string;
      };
  };
}

interface IDataAttributes {
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  metadata: {
      id: number;
      metaTitle: string;
      metaDescription: string;
      metaImage: MetaImage;
  };
  blocks: Block[];
}

export interface IData {
  id: number;
  attributes: IDataAttributes;
}

export interface IDataResponse {
  data: IData[];
  meta: {
      pagination: {
          page: number;
          pageSize: number;
          pageCount: number;
          total: number;
      };
  };
}

export interface IDataProductResponse {
  data: IData;
  meta: {
      pagination: {
          page: number;
          pageSize: number;
          pageCount: number;
          total: number;
      };
  };
}




// export interface IDataAttributes {
//     createdAt?: string;
//     updatedAt?: string;
//     publishedAt?: string;
//     title: string;
//     description: string;
//     slug: string;
//     [key: string]: unknown;
// }

// export interface IData {
//     id: number;
//     attributes: IDataAttributes;
//   }

//   export interface IDataResponseError {
//     status: number;
//     name: string;
//     message: string;
//     details: object;
//   }

//   export interface IDataResponse {
//     data: IData | null;
//     meta?: object;
//     error?: IDataResponseError;
//   }
  
//   export interface IDataListResponse {
//     data: IData[];
//     meta: object;
//   }

// // export interface AttributesProducts {
// //     title: string;
// //     rating: number;
// //     body: string;
// //     createdAt: string;
// //     updatedAt: string;
// //     publishedAt: string;
// // }

// // interface ReviewDataProducts {
// //     id: number;
// //     attributes: AttributesProducts;
// // }

// // interface Pagination {
// //     page: number;
// //     pageSize: number;
// //     pageCount: number;
// //     total: number;
// // }

// // export interface Meta {
// //     pagination: Pagination;
// // }

// // export interface ReviewResponse {
// //     data: ReviewData[];
// //     meta: Meta;
// // }


// // export interface ReviewResponseProducts {
// //     data: {
// //         attributes: Attributes;
// //         data: ReviewDataProducts;
// //     }
// // }