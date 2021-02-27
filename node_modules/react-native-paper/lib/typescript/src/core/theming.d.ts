/// <reference types="react" />
import { Theme } from '../types';
export declare const ThemeProvider: import("react").ComponentType<{
    theme?: Theme | undefined;
}>, withTheme: <Props extends {
    theme: Theme;
}, C>(WrappedComponent: (import("react").ComponentClass<Props, any> & C) | (import("react").FunctionComponent<Props> & C)) => (import("react").ComponentClass<Pick<Props, Exclude<keyof Props, "theme">> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & C) | (import("react").FunctionComponent<Props> & C), {}>) | (import("react").FunctionComponent<Pick<Props, Exclude<keyof Props, "theme">> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & C) | (import("react").FunctionComponent<Props> & C), {}>), useTheme: (overrides?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined) => Theme;
