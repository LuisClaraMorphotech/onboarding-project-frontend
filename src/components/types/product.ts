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