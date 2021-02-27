import * as React from 'react';
import { ViewStyle, StyleProp, GestureResponderEvent } from 'react-native';
import TouchableRipple from './TouchableRipple';
import { IconSource } from './Icon';
import { Theme, $RemoveChildren } from '../types';
declare type Props = $RemoveChildren<typeof TouchableRipple> & {
    /**
     * Icon to display.
     */
    icon: IconSource;
    /**
     * Color of the icon.
     */
    color?: string;
    /**
     * Size of the icon.
     */
    size?: number;
    /**
     * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * Whether an icon change is animated.
     */
    animated?: boolean;
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: Theme;
};
declare const _default: (React.ComponentClass<Pick<Props, "style" | "color" | "size" | "icon" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor" | "animated"> & {
    /**
     * Size of the icon.
     */
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & (({ icon, color: customColor, size, accessibilityLabel, disabled, onPress, animated, theme, style, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Props> & (({ icon, color: customColor, size, accessibilityLabel, disabled, onPress, animated, theme, style, ...rest }: Props) => JSX.Element)), {}>) | (React.FunctionComponent<Pick<Props, "style" | "color" | "size" | "icon" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor" | "animated"> & {
    /**
     * Size of the icon.
     */
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & (({ icon, color: customColor, size, accessibilityLabel, disabled, onPress, animated, theme, style, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Props> & (({ icon, color: customColor, size, accessibilityLabel, disabled, onPress, animated, theme, style, ...rest }: Props) => JSX.Element)), {}>);
export default _default;
