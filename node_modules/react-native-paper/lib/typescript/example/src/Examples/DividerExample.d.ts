/// <reference types="react" />
import { Theme } from 'react-native-paper';
declare type Props = {
    theme: Theme;
};
declare const _default: (import("react").ComponentClass<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & {
    (props: Props): JSX.Element;
    title: string;
}) | (import("react").FunctionComponent<Props> & {
    (props: Props): JSX.Element;
    title: string;
}), {}>) | (import("react").FunctionComponent<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & {
    (props: Props): JSX.Element;
    title: string;
}) | (import("react").FunctionComponent<Props> & {
    (props: Props): JSX.Element;
    title: string;
}), {}>);
export default _default;
