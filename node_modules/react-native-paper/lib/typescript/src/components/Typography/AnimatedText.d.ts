import * as React from 'react';
import { Animated, TextStyle, StyleProp } from 'react-native';
import { Theme } from '../../types';
declare type Props = React.ComponentProps<typeof Animated.Text> & {
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: Theme;
};
/**
 * Text component which follows styles from the theme.
 *
 * @extends Text props https://facebook.github.io/react-native/docs/text.html#props
 */
declare function AnimatedText({ style, theme, ...rest }: Props): JSX.Element;
declare const _default: (React.ComponentClass<Pick<any, string | number | symbol> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<any, any> & typeof AnimatedText) | (React.FunctionComponent<any> & typeof AnimatedText), {}>) | (React.FunctionComponent<Pick<any, string | number | symbol> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<any, any> & typeof AnimatedText) | (React.FunctionComponent<any> & typeof AnimatedText), {}>);
export default _default;
