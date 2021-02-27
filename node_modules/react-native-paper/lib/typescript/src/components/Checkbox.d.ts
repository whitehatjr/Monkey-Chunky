import * as React from 'react';
import { CheckboxAndroid as _CheckboxAndroid } from './CheckboxAndroid';
import { CheckboxIOS as _CheckboxIOS } from './CheckboxIOS';
import { Theme } from '../types';
declare type Props = {
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
     * Custom color for unchecked checkbox.
     */
    uncheckedColor?: string;
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
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/checkbox-enabled.android.png" />
 *     <figcaption>Android (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-disabled.android.png" />
 *     <figcaption>Android (disabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-enabled.ios.png" />
 *     <figcaption>iOS (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-disabled.ios.png" />
 *     <figcaption>iOS (disabled)</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Checkbox } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     checked: false,
 *   };
 *
 *   render() {
 *     const { checked } = this.state;
 *     return (
 *       <Checkbox
 *         status={checked ? 'checked' : 'unchecked'}
 *         onPress={() => { this.setState({ checked: !checked }); }}
 *       />
 *     );
 *   }
 * }
 * ```
 */
declare class Checkbox extends React.Component<Props> {
    static Android: (React.ComponentClass<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }>, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: Theme;
    }, "style" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor" | "status" | "uncheckedColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }>, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: Theme;
    }, any> & typeof _CheckboxAndroid) | (React.FunctionComponent<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }>, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: Theme;
    }> & typeof _CheckboxAndroid), {}>) | (React.FunctionComponent<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }>, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: Theme;
    }, "style" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor" | "status" | "uncheckedColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }>, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: Theme;
    }, any> & typeof _CheckboxAndroid) | (React.FunctionComponent<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }>, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: Theme;
    }> & typeof _CheckboxAndroid), {}>);
    static IOS: (React.ComponentClass<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }>, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: Theme;
    }, "style" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor" | "status"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }>, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: Theme;
    }, any> & typeof _CheckboxIOS) | (React.FunctionComponent<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }>, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: Theme;
    }> & typeof _CheckboxIOS), {}>) | (React.FunctionComponent<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }>, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: Theme;
    }, "style" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor" | "status"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }>, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: Theme;
    }, any> & typeof _CheckboxIOS) | (React.FunctionComponent<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }>, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: Theme;
    }> & typeof _CheckboxIOS), {}>);
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "color" | "onPress" | "disabled" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof Checkbox) | (React.FunctionComponent<Props> & typeof Checkbox), {}>) | (React.FunctionComponent<Pick<Props, "color" | "onPress" | "disabled" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof Checkbox) | (React.FunctionComponent<Props> & typeof Checkbox), {}>);
export default _default;
