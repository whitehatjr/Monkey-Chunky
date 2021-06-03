import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    theme: Theme;
};
declare type State = {
    checkedNormal: boolean;
    checkedCustom: boolean;
    indeterminate: boolean;
};
declare class CheckboxExample extends React.Component<Props, State> {
    static title: string;
    state: {
        checkedNormal: boolean;
        checkedCustom: boolean;
        indeterminate: boolean;
    };
    render(): JSX.Element;
}
declare const _default: (import("react").ComponentClass<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & typeof CheckboxExample) | (import("react").FunctionComponent<Props> & typeof CheckboxExample), {}>) | (import("react").FunctionComponent<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & typeof CheckboxExample) | (import("react").FunctionComponent<Props> & typeof CheckboxExample), {}>);
export default _default;
