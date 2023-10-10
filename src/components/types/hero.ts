export interface HeroLink {
    id: number;
    title: string;
    link: string;
    isExternal: boolean;
    type?: string;
}

export interface HeroBlock {
    id: number;
    __component: string;
    heading?: string;
    text?: string;
    link?: HeroLink;
    image?: {
        data: {
            id: number;
            attributes: {
                name: string;
                alternativeText?: string | null;
                url: string;
            };
        };
    };
}