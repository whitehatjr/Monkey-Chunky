import * as React from 'react';
import { Animated, ViewStyle, StyleProp } from 'react-native';
import { Theme } from '../types';
declare type Props = {
    /**
     * Progress value (between 0 and 1).
     */
    progress?: number;
    /**
     * Color of the progress bar. The background color will be calculated based on this but you can change it by passing `backgroundColor` to `style` prop.
     */
    color?: string;
    /**
     * If the progress bar will show indeterminate progress.
     */
    indeterminate?: boolean;
    /**
     * Whether to show the ProgressBar (true, the default) or hide it (false).
     */
    visible?: boolean;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: Theme;
};
declare type State = {
    width: number;
    fade: Animated.Value;
    timer: Animated.Value;
};
/**
 * Progress bar is an indicator used to present progress of some activity in the app.
 *
 * <div class="screenshots">
 *   <img src="screenshots/progress-bar.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ProgressBar, Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <ProgressBar progress={0.5} color={Colors.red800} />
 * );
 *
 * export default MyComponent;
 * ```
 */
declare class ProgressBar extends React.Component<Props, State> {
    static defaultProps: {
        visible: boolean;
        progress: number;
    };
    state: {
        width: number;
        timer: Animated.Value;
        fade: Animated.Value;
    };
    indeterminateAnimation: Animated.CompositeAnimation | null;
    componentDidUpdate(prevProps: Props): void;
    private onLayout;
    private startAnimation;
    private stopAnimation;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "progress" | "style" | "color" | "visible" | "indeterminate"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof ProgressBar) | (React.FunctionComponent<Props> & typeof ProgressBar), {}>) | (React.FunctionComponent<Pick<Props, "progress" | "style" | "color" | "visible" | "indeterminate"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof ProgressBar) | (React.FunctionComponent<Props> & typeof ProgressBar), {}>);
export default _default;
