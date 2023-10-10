export interface Service {
    id: number;
    attributes: {
        name: string;
        description: string;
        createdAt: string;
        updatedAt: string;
    };
}

export interface Plan {
    id: number;
    planType: string;
    planPrice: string;
    isFeatured: boolean;
    services: {
        data: Service[];
    };
    link: {
        id: number;
        title: string;
        link: string;
        isExternal: boolean;
        type: string;
    };
}

export interface PricingBlock {
    id: number;
    __component: string;
    name?: string;
    description?: string;
    plan?: Plan[];
}