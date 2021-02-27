import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    theme: Theme;
};
declare type State = {
    loading: boolean;
};
declare class ButtonExample extends React.Component<Props, State> {
    static title: string;
    render(): JSX.Element;
}
declare const _default: (import("react").ComponentClass<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & typeof ButtonExample) | (import("react").FunctionComponent<Props> & typeof ButtonExample), {}>) | (import("react").FunctionComponent<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & typeof ButtonExample) | (import("react").FunctionComponent<Props> & typeof ButtonExample), {}>);
export default _default;
