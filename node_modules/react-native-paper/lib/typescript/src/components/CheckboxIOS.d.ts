import * as React from 'react';
import TouchableRipple from './TouchableRipple';
import { Theme, $RemoveChildren } from '../types';
declare type Props = $RemoveChildren<typeof TouchableRipple> & {
    /**
     * Status of checkbox.
     */
    status: 'checked' | 'unchecked' | 'indeterminate';
    /**
     * Whether checkbox is disabled.
     */
    disabled?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * Custom color for checkbox.
     */
    color?: string;
    /**
     * @optional
     */
    theme: Theme;
};
/**
 * Checkboxes allow the selection of multiple options from a set.
 * This component follows platform guidelines for iOS.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/checkbox-enabled.ios.png" />
 *     <figcaption>Enabled</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-disabled.ios.png" />
 *     <figcaption>Disabled</figcaption>
 *   </figure>
 * </div>
 */
declare class CheckboxIOS extends React.Component<Props> {
    static displayName: string;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "style" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor" | "status"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof CheckboxIOS) | (React.FunctionComponent<Props> & typeof CheckboxIOS), {}>) | (React.FunctionComponent<Pick<Props, "style" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor" | "status"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof CheckboxIOS) | (React.FunctionComponent<Props> & typeof CheckboxIOS), {}>);
export default _default;
export { CheckboxIOS };
