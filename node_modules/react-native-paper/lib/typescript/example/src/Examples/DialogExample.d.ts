import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type State = {
    visible1: boolean;
    visible2: boolean;
    visible3: boolean;
    visible4: boolean;
    visible5: boolean;
};
declare type Props = {
    theme: Theme;
};
declare class DialogExample extends React.Component<Props, State> {
    static title: string;
    state: {
        visible1: boolean;
        visible2: boolean;
        visible3: boolean;
        visible4: boolean;
        visible5: boolean;
    };
    _openDialog1: () => void;
    _openDialog2: () => void;
    _openDialog3: () => void;
    _openDialog4: () => void;
    _openDialog5: () => void;
    _closeDialog1: () => void;
    _closeDialog2: () => void;
    _closeDialog3: () => void;
    _closeDialog4: () => void;
    _closeDialog5: () => void;
    render(): JSX.Element;
}
declare const _default: (import("react").ComponentClass<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & typeof DialogExample) | (import("react").FunctionComponent<Props> & typeof DialogExample), {}>) | (import("react").FunctionComponent<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & typeof DialogExample) | (import("react").FunctionComponent<Props> & typeof DialogExample), {}>);
export default _default;
