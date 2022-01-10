import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    theme: Theme;
    navigation: any;
};
export declare const examples: {
    [key: string]: any;
};
declare class ExampleList extends React.Component<Props> {
    _renderItem: ({ item }: any) => JSX.Element;
    _keyExtractor: (item: {
        id: string;
    }) => string;
    render(): JSX.Element;
}
declare const _default: (import("react").ComponentClass<Pick<Props, "navigation"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../src/types").Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & typeof ExampleList) | (import("react").FunctionComponent<Props> & typeof ExampleList), {}>) | (import("react").FunctionComponent<Pick<Props, "navigation"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../src/types").Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & typeof ExampleList) | (import("react").FunctionComponent<Props> & typeof ExampleList), {}>);
export default _default;
