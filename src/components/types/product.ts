export interface ProductImage {
    data: {
        id: number;
        attributes: {
            name: string;
            alternativeText: string | null;
            url: string;
        };
    };
}
export interface ProductLink {
    id: number;
    title: string;
    link: string;
    isExternal: boolean;
    type: string;
}
export interface IProductCard {
    id: number;
    title?: string;
    price?: string;
    image?: ProductImage;
    link?: ProductLink;
}

export interface IProductRowBlock {
    id?: number;
    __component: string;
    card?: IProductCard[];
}

interface CardProductAttributes {
    id: number;
    attributes?: {
        name: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}


export interface CardProduct {
    id: number;
    __component: string;
    title: string;
    description: string;
    cardType: CardProductAttributes
}
// import { IData } from "../../types/types";
export interface IDataProduct {
    data: LegoSet;
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}


interface Dimensions {
    H: string;
    W: string;
    D: string;
}

interface ImageAttributes {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: null;
    width: number;
    height: number;
    size: number;
    url: string;
}

interface ImageFormats {
    thumbnail: ImageAttributes;
    small: ImageAttributes;
    medium: ImageAttributes;
}

interface ImageData {
    id: number;
    attributes: {
        name: string;
        alternativeText: null;
        caption: null;
        width: number;
        height: number;
        formats: ImageFormats;
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: null;
        provider: string;
        provider_metadata: null;
        createdAt: string;
        updatedAt: string;
    };
}

interface Category {
    id: number;
    attributes: {
        name: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}

interface Attributes {
    stockKeepingUnit: string;
    name: string;
    description: string;
    price: string;
    recommendedAge: number;
    stockLimit: number;
    pieceCount: string;
    insidersPoints: string;
    miniFigures: number;
    comingSoon: boolean;
    dimensions: Dimensions;
    specifications: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    coverImage: {
        data: ImageData;
    };
    images: {
        data: ImageData[];
    };
    categories: {
        data: Category[];
    };
}

export interface LegoSet {
    id: number;
    attributes: Attributes;
}


