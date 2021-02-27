import * as React from 'react';
export declare type Font = {
    fontFamily: string;
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
};
export declare type Fonts = {
    regular: Font;
    medium: Font;
    light: Font;
    thin: Font;
};
export declare type Theme = {
    dark: boolean;
    mode?: 'adaptive' | 'exact';
    roundness: number;
    colors: {
        primary: string;
        background: string;
        surface: string;
        accent: string;
        error: string;
        text: string;
        onSurface: string;
        onBackground: string;
        disabled: string;
        placeholder: string;
        backdrop: string;
        notification: string;
    };
    fonts: Fonts;
    animation: {
        scale: number;
    };
};
export declare type $Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export declare type $RemoveChildren<T extends React.ComponentType<any>> = $Omit<React.ComponentProps<T>, 'children'>;
export declare type EllipsizeProp = 'head' | 'middle' | 'tail' | 'clip';
