import * as React from 'react';
import { Animated } from 'react-native';
import TouchableRipple from './TouchableRipple';
import { Theme, $RemoveChildren } from '../types';
declare type Props = $RemoveChildren<typeof TouchableRipple> & {
    /**
     * Value of the radio button
     */
    value: string;
    /**
     * Status of radio button.
     */
    status?: 'checked' | 'unchecked';
    /**
     * Whether radio is disabled.
     */
    disabled?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: (param?: any) => void;
    /**
     * Custom color for unchecked radio.
     */
    uncheckedColor?: string;
    /**
     * Custom color for radio.
     */
    color?: string;
    /**
     * @optional
     */
    theme: Theme;
};
declare type State = {
    borderAnim: Animated.Value;
    radioAnim: Animated.Value;
};
/**
 * Radio buttons allow the selection a single option from a set.
 * This component follows platform guidelines for Android.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/radio-enabled.android.png" />
 *     <figcaption>Enabled</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-disabled.android.png" />
 *     <figcaption>Disabled</figcaption>
 *   </figure>
 * </div>
 */
declare class RadioButtonAndroid extends React.Component<Props, State> {
    static displayName: string;
    state: {
        borderAnim: Animated.Value;
        radioAnim: Animated.Value;
    };
    componentDidUpdate(prevProps: Props): void;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "style" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor" | "value" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof RadioButtonAndroid) | (React.FunctionComponent<Props> & typeof RadioButtonAndroid), {}>) | (React.FunctionComponent<Pick<Props, "style" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor" | "value" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof RadioButtonAndroid) | (React.FunctionComponent<Props> & typeof RadioButtonAndroid), {}>);
export default _default;
export { RadioButtonAndroid };
