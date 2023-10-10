export interface CTAInput {
    id: number;
    placeholder: string;
    label: string;
    inputType: string;
}

export interface CTAButton {
    id: number;
    title: string;
    link: string;
    isExternal: boolean;
    type: string;
}

export interface CTAForm {
    id: number;
    heading?: string;
    description?: string;
    input?: CTAInput[];
    button?: CTAButton;
}

export interface CTABlock {
    id: number;
    __component: string;
    heading?: string;
    description?: string;
    form?: CTAForm;
}
