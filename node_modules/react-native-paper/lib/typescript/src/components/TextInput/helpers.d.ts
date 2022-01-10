import { Animated } from 'react-native';
declare type PaddingProps = {
    height: number | null;
    labelHalfHeight: number;
    multiline: boolean | null;
    dense: boolean | null;
    topPosition: number;
    fontSize: number;
    label?: string | null;
    scale: number;
    offset: number;
    isAndroid: boolean;
    styles: {
        paddingTop: number;
        paddingBottom: number;
    };
};
declare type AdjProps = PaddingProps & {
    pad: number;
};
export declare type Padding = {
    paddingTop: number;
    paddingBottom: number;
};
export declare const calculateLabelTopPosition: (labelHeight: number, height?: number, optionalPadding?: number) => number;
export declare const calculateInputHeight: (labelHeight: number, height: any, minHeight: number) => number;
export declare const calculatePadding: (props: PaddingProps) => number;
export declare const adjustPaddingOut: ({ pad, multiline, label, scale, height, fontSize, dense, offset, isAndroid, }: AdjProps) => Padding;
export declare const adjustPaddingFlat: ({ pad, scale, multiline, label, height, offset, dense, fontSize, isAndroid, styles, }: AdjProps) => Padding;
export declare const interpolatePlaceholder: (labeled: Animated.Value, hasActiveOutline: boolean | undefined) => Animated.AnimatedInterpolation;
export {};
