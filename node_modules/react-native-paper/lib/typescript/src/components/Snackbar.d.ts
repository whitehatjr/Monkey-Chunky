import * as React from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';
import { Theme } from '../types';
declare type Props = {
    /**
     * Whether the Snackbar is currently visible.
     */
    visible: boolean;
    /**
     * Label and press callback for the action button. It should contain the following properties:
     * - `label` - Label of the action button
     * - `onPress` - Callback that is called when action button is pressed.
     */
    action?: {
        label: string;
        accessibilityLabel?: string;
        onPress: () => void;
    };
    /**
     * The duration for which the Snackbar is shown.
     */
    duration?: number;
    /**
     * Callback called when Snackbar is dismissed. The `visible` prop needs to be updated when this is called.
     */
    onDismiss: () => void;
    /**
     * Text content of the Snackbar.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: Theme;
};
declare type State = {
    opacity: Animated.Value;
    hidden: boolean;
};
/**
 * Snackbars provide brief feedback about an operation through a message at the bottom of the screen.
 * Snackbar by default use onSurface color from theme
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/snackbar.gif" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View, StyleSheet } from 'react-native';
 * import { Button, Snackbar } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     visible: false,
 *   };
 *
 *   render() {
 *     const { visible } = this.state;
 *     return (
 *       <View style={styles.container}>
 *         <Button
 *           onPress={() => this.setState(state => ({ visible: !state.visible }))}
 *         >
 *           {this.state.visible ? 'Hide' : 'Show'}
 *         </Button>
 *         <Snackbar
 *           visible={this.state.visible}
 *           onDismiss={() => this.setState({ visible: false })}
 *           action={{
 *             label: 'Undo',
 *             onPress: () => {
 *               // Do something
 *             },
 *           }}
 *         >
 *           Hey there! I'm a Snackbar.
 *         </Snackbar>
 *       </View>
 *     );
 *   }
 * }
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flex: 1,
 *     justifyContent: 'space-between',
 *   },
 * });
 * ```
 */
declare class Snackbar extends React.Component<Props, State> {
    /**
     * Show the Snackbar for a short duration.
     */
    static DURATION_SHORT: number;
    /**
     * Show the Snackbar for a medium duration.
     */
    static DURATION_MEDIUM: number;
    /**
     * Show the Snackbar for a long duration.
     */
    static DURATION_LONG: number;
    static defaultProps: {
        duration: number;
    };
    state: {
        opacity: Animated.Value;
        hidden: boolean;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    private toggle;
    private show;
    private hide;
    private hideTimeout?;
    render(): JSX.Element | null;
}
declare const _default: (React.ComponentClass<Pick<Props, "style" | "children" | "visible" | "duration" | "onDismiss" | "action"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof Snackbar) | (React.FunctionComponent<Props> & typeof Snackbar), {}>) | (React.FunctionComponent<Pick<Props, "style" | "children" | "visible" | "duration" | "onDismiss" | "action"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof Snackbar) | (React.FunctionComponent<Props> & typeof Snackbar), {}>);
export default _default;
