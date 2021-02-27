import * as React from 'react';
import { StyleProp, ViewStyle, GestureResponderEvent } from 'react-native';
import ToggleButtonGroup from './ToggleButtonGroup';
import ToggleButtonRow from './ToggleButtonRow';
import { IconSource } from '../Icon';
import { Theme } from '../../types';
declare type Props = {
    /**
     * Icon to display for the `ToggleButton`.
     */
    icon: IconSource;
    /**
     * Size of the icon.
     */
    size?: number;
    /**
     * Custom text color for button.
     */
    color?: string;
    /**
     * Whether the button is disabled.
     */
    disabled?: boolean;
    /**
     * Accessibility label for the `ToggleButton`. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string;
    /**
     * Function to execute on press.
     */
    onPress?: (value?: GestureResponderEvent | string) => void;
    /**
     * Value of button.
     */
    value?: string;
    /**
     * Status of button.
     */
    status?: 'checked' | 'unchecked';
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: Theme;
};
/**
 * Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons,
 * a group should share a common container.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/toggle-button.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ToggleButton } from 'react-native-paper';
 *
 * class ToggleButtonExample extends React.Component {
 *   state = {
 *     status: 'checked',
 *   };
 *
 *   render() {
 *     return (
 *       <ToggleButton
 *         icon="bluetooth"
 *         value="bluetooth"
 *         status={this.state.status}
 *         onPress={value =>
 *           this.setState({
 *             status: value === 'checked' ? 'unchecked' : 'checked',
 *           })
 *         }
 *       />
 *     );
 *   }
 * }
 * ```
 */
declare class ToggleButton extends React.Component<Props> {
    static Group: typeof ToggleButtonGroup;
    static Row: typeof ToggleButtonRow;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "style" | "color" | "size" | "icon" | "onPress" | "accessibilityLabel" | "disabled" | "value" | "status"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof ToggleButton) | (React.FunctionComponent<Props> & typeof ToggleButton), {}>) | (React.FunctionComponent<Pick<Props, "style" | "color" | "size" | "icon" | "onPress" | "accessibilityLabel" | "disabled" | "value" | "status"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof ToggleButton) | (React.FunctionComponent<Props> & typeof ToggleButton), {}>);
export default _default;
