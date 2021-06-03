import * as React from 'react';
import { GestureResponderEvent } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Theme } from 'react-native-paper';
declare type State = {
    visible1: boolean;
    visible2: boolean;
    visible3: boolean;
    contextualMenuCoord: {
        x: number;
        y: number;
    };
};
declare type Props = {
    theme: Theme;
    navigation: StackNavigationProp<{}>;
};
declare class MenuExample extends React.Component<Props, State> {
    state: {
        visible1: boolean;
        visible2: boolean;
        visible3: boolean;
        contextualMenuCoord: {
            x: number;
            y: number;
        };
    };
    static title: string;
    _handleLongPress: (event: GestureResponderEvent) => void;
    _openMenu1: () => void;
    _openMenu2: () => void;
    _openMenu3: () => void;
    _closeMenu1: () => void;
    _closeMenu2: () => void;
    _closeMenu3: () => void;
    render(): JSX.Element;
}
declare const _default: (import("react").ComponentClass<Pick<Props, "navigation"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & typeof MenuExample) | (import("react").FunctionComponent<Props> & typeof MenuExample), {}>) | (import("react").FunctionComponent<Pick<Props, "navigation"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & typeof MenuExample) | (import("react").FunctionComponent<Props> & typeof MenuExample), {}>);
export default _default;
