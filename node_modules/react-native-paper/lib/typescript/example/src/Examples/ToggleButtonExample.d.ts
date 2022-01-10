import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    theme: Theme;
};
declare type State = {
    first: string;
    second: string;
    fruit: string;
    status: 'checked' | 'unchecked';
};
declare class ToggleButtonExample extends React.Component<Props, State> {
    static title: string;
    state: State;
    render(): JSX.Element;
}
declare const _default: (import("react").ComponentClass<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & typeof ToggleButtonExample) | (import("react").FunctionComponent<Props> & typeof ToggleButtonExample), {}>) | (import("react").FunctionComponent<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & typeof ToggleButtonExample) | (import("react").FunctionComponent<Props> & typeof ToggleButtonExample), {}>);
export default _default;
