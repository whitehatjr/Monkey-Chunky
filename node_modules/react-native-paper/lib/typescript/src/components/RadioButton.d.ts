import * as React from 'react';
import RadioButtonGroup, { RadioButtonContextType } from './RadioButtonGroup';
import { RadioButtonAndroid as _RadioButtonAndroid } from './RadioButtonAndroid';
import { RadioButtonIOS as _RadioButtonIOS } from './RadioButtonIOS';
import { Theme } from '../types';
declare type Props = {
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
    onPress?: () => void;
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
/**
 * Radio buttons allow the selection a single option from a set.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/radio-enabled.android.png" />
 *     <figcaption>Android (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-disabled.android.png" />
 *     <figcaption>Android (disabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-enabled.ios.png" />
 *     <figcaption>iOS (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-disabled.ios.png" />
 *     <figcaption>iOS (disabled)</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { RadioButton } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     checked: 'first',
 *   };
 *
 *   render() {
 *     const { checked } = this.state;
 *
 *     return (
 *       <View>
 *         <RadioButton
 *           value="first"
 *           status={checked === 'first' ? 'checked' : 'unchecked'}
 *           onPress={() => { this.setState({ checked: 'first' }); }}
 *         />
 *         <RadioButton
 *           value="second"
 *           status={checked === 'second' ? 'checked' : 'unchecked'}
 *           onPress={() => { this.setState({ checked: 'second' }); }}
 *         />
 *       </View>
 *     );
 *   }
 * }
 * ```
 */
declare class RadioButton extends React.Component<Props> {
    static Group: typeof RadioButtonGroup;
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
        value: string;
        status?: "checked" | "unchecked" | undefined;
        disabled?: boolean | undefined;
        onPress?: ((param?: any) => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: Theme;
    }, "style" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor" | "value" | "status" | "uncheckedColor"> & {
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
        value: string;
        status?: "checked" | "unchecked" | undefined;
        disabled?: boolean | undefined;
        onPress?: ((param?: any) => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: Theme;
    }, any> & typeof _RadioButtonAndroid) | (React.FunctionComponent<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
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
        value: string;
        status?: "checked" | "unchecked" | undefined;
        disabled?: boolean | undefined;
        onPress?: ((param?: any) => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: Theme;
    }> & typeof _RadioButtonAndroid), {}>) | (React.FunctionComponent<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
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
        value: string;
        status?: "checked" | "unchecked" | undefined;
        disabled?: boolean | undefined;
        onPress?: ((param?: any) => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: Theme;
    }, "style" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor" | "value" | "status" | "uncheckedColor"> & {
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
        value: string;
        status?: "checked" | "unchecked" | undefined;
        disabled?: boolean | undefined;
        onPress?: ((param?: any) => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: Theme;
    }, any> & typeof _RadioButtonAndroid) | (React.FunctionComponent<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
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
        value: string;
        status?: "checked" | "unchecked" | undefined;
        disabled?: boolean | undefined;
        onPress?: ((param?: any) => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: Theme;
    }> & typeof _RadioButtonAndroid), {}>);
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
        value: string;
        status?: "checked" | "unchecked" | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: Theme;
    }, "style" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor" | "value" | "status"> & {
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
        value: string;
        status?: "checked" | "unchecked" | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: Theme;
    }, any> & typeof _RadioButtonIOS) | (React.FunctionComponent<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
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
        value: string;
        status?: "checked" | "unchecked" | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: Theme;
    }> & typeof _RadioButtonIOS), {}>) | (React.FunctionComponent<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
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
        value: string;
        status?: "checked" | "unchecked" | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: Theme;
    }, "style" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor" | "value" | "status"> & {
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
        value: string;
        status?: "checked" | "unchecked" | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: Theme;
    }, any> & typeof _RadioButtonIOS) | (React.FunctionComponent<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
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
        value: string;
        status?: "checked" | "unchecked" | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: Theme;
    }> & typeof _RadioButtonIOS), {}>);
    handlePress: (context: RadioButtonContextType) => void;
    isChecked: (context: RadioButtonContextType) => "checked" | "unchecked";
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "color" | "onPress" | "disabled" | "value" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof RadioButton) | (React.FunctionComponent<Props> & typeof RadioButton), {}>) | (React.FunctionComponent<Pick<Props, "color" | "onPress" | "disabled" | "value" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof RadioButton) | (React.FunctionComponent<Props> & typeof RadioButton), {}>);
export default _default;
