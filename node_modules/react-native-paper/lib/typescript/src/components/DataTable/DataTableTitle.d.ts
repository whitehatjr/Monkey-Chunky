import * as React from 'react';
import { Animated, StyleProp, TouchableWithoutFeedback, ViewStyle } from 'react-native';
import { Theme } from '../../types';
declare type Props = React.ComponentProps<typeof TouchableWithoutFeedback> & {
    /**
     * Text content of the `DataTableTitle`.
     */
    children: React.ReactNode;
    /**
     * Align the text to the right. Generally monetary or number fields are aligned to right.
     */
    numeric?: boolean;
    /**
     * Direction of sorting. An arrow indicating the direction is displayed when this is given.
     */
    sortDirection?: 'ascending' | 'descending';
    /**
     * The number of lines to show.
     */
    numberOfLines?: number;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: Theme;
};
declare type State = {
    spinAnim: Animated.Value;
};
declare class DataTableTitle extends React.Component<Props, State> {
    static displayName: string;
    static defaultProps: {
        numberOfLines: number;
    };
    state: {
        spinAnim: Animated.Value;
    };
    componentDidUpdate(prevProps: Props): void;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "style" | "children" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "numeric" | "sortDirection"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof DataTableTitle) | (React.FunctionComponent<Props> & typeof DataTableTitle), {}>) | (React.FunctionComponent<Pick<Props, "style" | "children" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "numeric" | "sortDirection"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof DataTableTitle) | (React.FunctionComponent<Props> & typeof DataTableTitle), {}>);
export default _default;
export { DataTableTitle };
