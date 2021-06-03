import * as React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import Text from '../Typography/Text';
import { Theme } from '../../types';
declare type Props = React.ComponentProps<typeof Text> & {
    /**
     * @optional
     */
    theme: Theme;
    /**
     * Style that is passed to Text element.
     */
    style?: StyleProp<TextStyle>;
};
/**
 * A component used to display a header in lists.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * class MyComponent extends React.Component {
 *  render () {
 *    return <List.Subheader>My List Title</List.Subheader>;
 *  }
 * }
 *
 * export default MyComponent;
 * ```
 */
declare class ListSubheader extends React.Component<Props> {
    static displayName: string;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Pick<import("react-native").TextProps & {
    style?: StyleProp<TextStyle>;
    theme: Theme;
}, "style" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
} & {
    /**
     * @optional
     */
    theme: Theme;
    /**
     * Style that is passed to Text element.
     */
    style?: StyleProp<TextStyle>;
}, "style" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Pick<import("react-native").TextProps & {
    style?: StyleProp<TextStyle>;
    theme: Theme;
}, "style" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
} & {
    /**
     * @optional
     */
    theme: Theme;
    /**
     * Style that is passed to Text element.
     */
    style?: StyleProp<TextStyle>;
}, any> & typeof ListSubheader) | (React.FunctionComponent<Pick<import("react-native").TextProps & {
    style?: StyleProp<TextStyle>;
    theme: Theme;
}, "style" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
} & {
    /**
     * @optional
     */
    theme: Theme;
    /**
     * Style that is passed to Text element.
     */
    style?: StyleProp<TextStyle>;
}> & typeof ListSubheader), {}>) | (React.FunctionComponent<Pick<Pick<import("react-native").TextProps & {
    style?: StyleProp<TextStyle>;
    theme: Theme;
}, "style" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
} & {
    /**
     * @optional
     */
    theme: Theme;
    /**
     * Style that is passed to Text element.
     */
    style?: StyleProp<TextStyle>;
}, "style" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Pick<import("react-native").TextProps & {
    style?: StyleProp<TextStyle>;
    theme: Theme;
}, "style" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
} & {
    /**
     * @optional
     */
    theme: Theme;
    /**
     * Style that is passed to Text element.
     */
    style?: StyleProp<TextStyle>;
}, any> & typeof ListSubheader) | (React.FunctionComponent<Pick<import("react-native").TextProps & {
    style?: StyleProp<TextStyle>;
    theme: Theme;
}, "style" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
} & {
    /**
     * @optional
     */
    theme: Theme;
    /**
     * Style that is passed to Text element.
     */
    style?: StyleProp<TextStyle>;
}> & typeof ListSubheader), {}>);
export default _default;
