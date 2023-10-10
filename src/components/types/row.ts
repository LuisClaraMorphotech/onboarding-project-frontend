export interface CardImage {
    data: {
        id: number;
        attributes: {
            name: string;
            alternativeText: string | null;
            url: string;
        };
    };
}

export interface ICard {
    id: number;
    heading: string;
    description: string;
    image: CardImage;
}

export interface RowBlock {
    id: number;
    __component: string;
    card?: ICard[];
}
