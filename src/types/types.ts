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
  cardType?: {
    data: {
      id: number;
      attributes: {
        name: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
      };
    };
  };
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

export interface IDataAttributes {
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
  blocks?: Block[];
}

// export interface IData {
//   id: number;
//   attributes: IDataAttributes;
// }
export interface IData {
  id: number,
  attributes?: IDataAttributes;
}

export interface IDataResponse {
  data: IData[];
  meta: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ICatAttribute {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ICatData {
  id: number;
  attributes: ICatAttribute;
}

export interface Meta {
  pagination: Pagination;
}

export interface ICatDataResponse {
  data: ICatData[];
  meta: Meta;
}