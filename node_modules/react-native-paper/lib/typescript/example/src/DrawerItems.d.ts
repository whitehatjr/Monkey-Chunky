import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    theme: Theme;
    toggleTheme: () => void;
    toggleRTL: () => void;
    isRTL: boolean;
    isDarkTheme: boolean;
};
declare type State = {
    open: boolean;
    drawerItemIndex: number;
};
declare class DrawerItems extends React.Component<Props, State> {
    state: {
        open: boolean;
        drawerItemIndex: number;
    };
    _setDrawerItem: (index: number) => void;
    render(): JSX.Element;
}
declare const _default: (import("react").ComponentClass<Pick<Props, "toggleTheme" | "toggleRTL" | "isRTL" | "isDarkTheme"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../src/types").Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & typeof DrawerItems) | (import("react").FunctionComponent<Props> & typeof DrawerItems), {}>) | (import("react").FunctionComponent<Pick<Props, "toggleTheme" | "toggleRTL" | "isRTL" | "isDarkTheme"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../src/types").Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & typeof DrawerItems) | (import("react").FunctionComponent<Props> & typeof DrawerItems), {}>);
export default _default;
