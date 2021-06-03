import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    navigation: any;
    theme: Theme;
};
declare type State = {
    firstQuery: string;
    secondQuery: string;
    thirdQuery: string;
};
declare class SearchExample extends React.Component<Props, State> {
    static title: string;
    state: {
        firstQuery: string;
        secondQuery: string;
        thirdQuery: string;
    };
    render(): JSX.Element;
}
declare const _default: (import("react").ComponentClass<Pick<Props, "navigation"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & typeof SearchExample) | (import("react").FunctionComponent<Props> & typeof SearchExample), {}>) | (import("react").FunctionComponent<Pick<Props, "navigation"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & typeof SearchExample) | (import("react").FunctionComponent<Props> & typeof SearchExample), {}>);
export default _default;
