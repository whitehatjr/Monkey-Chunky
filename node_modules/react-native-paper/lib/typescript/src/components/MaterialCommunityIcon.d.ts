export declare type IconProps = {
    name: string;
    color: string;
    size: number;
    direction: 'rtl' | 'ltr';
};
export declare const accessibilityProps: {
    role: string;
    focusable: boolean;
    accessibilityElementsHidden?: undefined;
    importantForAccessibility?: undefined;
} | {
    accessibilityElementsHidden: boolean;
    importantForAccessibility: "no-hide-descendants";
    role?: undefined;
    focusable?: undefined;
};
declare const defaultIcon: ({ name, color, size, direction }: IconProps) => JSX.Element;
export default defaultIcon;
