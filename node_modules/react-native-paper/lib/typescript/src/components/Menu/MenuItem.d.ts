import * as React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { IconSource } from '../Icon';
import { Theme } from '../../types';
declare type Props = {
    /**
     * Title text for the `MenuItem`.
     */
    title: React.ReactNode;
    /**
     * Icon to display for the `MenuItem`.
     */
    icon?: IconSource;
    /**
     * Whether the 'item' is disabled. A disabled 'item' is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * @optional
     */
    theme: Theme;
    style?: StyleProp<ViewStyle>;
};
/**
 * A component to show a single list item inside a Menu.
 *
 */
declare class MenuItem extends React.Component<Props> {
    static displayName: string;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "style" | "title" | "icon" | "onPress" | "disabled"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof MenuItem) | (React.FunctionComponent<Props> & typeof MenuItem), {}>) | (React.FunctionComponent<Pick<Props, "style" | "title" | "icon" | "onPress" | "disabled"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof MenuItem) | (React.FunctionComponent<Props> & typeof MenuItem), {}>);
export default _default;
export { MenuItem };
