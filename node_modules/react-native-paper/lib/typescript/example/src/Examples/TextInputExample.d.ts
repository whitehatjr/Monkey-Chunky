import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    theme: Theme;
};
declare type State = {
    text: string;
    name: string;
    outlinedText: string;
    largeText: string;
    outlinedLargeText: string;
    nameNoPadding: string;
    flatDenseText: string;
    flatDense: string;
    outlinedDenseText: string;
    outlinedDense: string;
    flatMultiline: string;
    flatTextArea: string;
    outlinedMultiline: string;
    outlinedTextArea: string;
    maxLengthName: string;
};
declare class TextInputExample extends React.Component<Props, State> {
    static title: string;
    state: {
        text: string;
        name: string;
        outlinedText: string;
        largeText: string;
        outlinedLargeText: string;
        nameNoPadding: string;
        flatDenseText: string;
        flatDense: string;
        outlinedDenseText: string;
        outlinedDense: string;
        flatMultiline: string;
        flatTextArea: string;
        outlinedMultiline: string;
        outlinedTextArea: string;
        maxLengthName: string;
    };
    _isUsernameValid: (name: string) => boolean;
    render(): JSX.Element;
}
declare const _default: (import("react").ComponentClass<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & typeof TextInputExample) | (import("react").FunctionComponent<Props> & typeof TextInputExample), {}>) | (import("react").FunctionComponent<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & typeof TextInputExample) | (import("react").FunctionComponent<Props> & typeof TextInputExample), {}>);
export default _default;
