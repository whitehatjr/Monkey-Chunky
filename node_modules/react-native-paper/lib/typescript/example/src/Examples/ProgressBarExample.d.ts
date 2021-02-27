import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    theme: Theme;
};
declare type State = {
    progress: number;
    visible: boolean;
};
declare class ProgressBarExample extends React.Component<Props, State> {
    static title: string;
    state: {
        progress: number;
        visible: boolean;
    };
    render(): JSX.Element;
}
declare const _default: (import("react").ComponentClass<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & typeof ProgressBarExample) | (import("react").FunctionComponent<Props> & typeof ProgressBarExample), {}>) | (import("react").FunctionComponent<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & typeof ProgressBarExample) | (import("react").FunctionComponent<Props> & typeof ProgressBarExample), {}>);
export default _default;
