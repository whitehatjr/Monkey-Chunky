import * as React from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';
import { IconSource } from './Icon';
import Surface from './Surface';
import { Theme } from '../types';
declare type Props = React.ComponentProps<typeof Surface> & {
    /**
     * Mode of the chip.
     * - `flat` - flat chip without outline.
     * - `outlined` - chip with an outline.
     */
    mode?: 'flat' | 'outlined';
    /**
     * Text content of the `Chip`.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    icon?: IconSource;
    /**
     * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    avatar?: React.ReactNode;
    /**
     * Whether chip is selected.
     */
    selected?: boolean;
    /**
     * Whether to style the chip color as selected.
     */
    selectedColor?: string;
    /**
     * Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * Accessibility label for the chip. This is read by the screen reader when the user taps the chip.
     */
    accessibilityLabel?: string;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * Function to execute on long press.
     */
    onLongPress?: () => void;
    /**
     * Function to execute on close button press. The close button appears only when this prop is specified.
     */
    onClose?: () => void;
    /**
     * Style of chip's text
     */
    textStyle?: any;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: Theme;
    /**
     * Pass down testID from chip props to touchable for Detox tests.
     */
    testID?: string;
};
declare type State = {
    elevation: Animated.Value;
};
/**
 * Chips can be used to display entities in small blocks.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/chip-1.png" />
 *     <figcaption>Flat chip</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/chip-2.png" />
 *     <figcaption>Outlined chip</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Chip } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare class Chip extends React.Component<Props, State> {
    static defaultProps: Partial<Props>;
    state: {
        elevation: Animated.Value;
    };
    private handlePressIn;
    private handlePressOut;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Pick<import("react-native").ViewProps & {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: Theme;
}, "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Mode of the chip.
     * - `flat` - flat chip without outline.
     * - `outlined` - chip with an outline.
     */
    mode?: "outlined" | "flat" | undefined;
    /**
     * Text content of the `Chip`.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    icon?: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[] | Readonly<{
        source: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[];
        direction: "rtl" | "ltr" | "auto";
    }> | ((props: {
        size: number;
        allowFontScaling?: boolean | undefined;
    } & {
        color: string;
    }) => React.ReactNode) | undefined;
    /**
     * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    avatar?: React.ReactNode;
    /**
     * Whether chip is selected.
     */
    selected?: boolean | undefined;
    /**
     * Whether to style the chip color as selected.
     */
    selectedColor?: string | undefined;
    /**
     * Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean | undefined;
    /**
     * Accessibility label for the chip. This is read by the screen reader when the user taps the chip.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on close button press. The close button appears only when this prop is specified.
     */
    onClose?: (() => void) | undefined;
    /**
     * Style of chip's text
     */
    textStyle?: any;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: Theme;
    /**
     * Pass down testID from chip props to touchable for Detox tests.
     */
    testID?: string | undefined;
}, "style" | "children" | "icon" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "selected" | "disabled" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "mode" | "avatar" | "selectedColor" | "onClose" | "textStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Pick<import("react-native").ViewProps & {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: Theme;
}, "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Mode of the chip.
     * - `flat` - flat chip without outline.
     * - `outlined` - chip with an outline.
     */
    mode?: "outlined" | "flat" | undefined;
    /**
     * Text content of the `Chip`.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    icon?: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[] | Readonly<{
        source: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[];
        direction: "rtl" | "ltr" | "auto";
    }> | ((props: {
        size: number;
        allowFontScaling?: boolean | undefined;
    } & {
        color: string;
    }) => React.ReactNode) | undefined;
    /**
     * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    avatar?: React.ReactNode;
    /**
     * Whether chip is selected.
     */
    selected?: boolean | undefined;
    /**
     * Whether to style the chip color as selected.
     */
    selectedColor?: string | undefined;
    /**
     * Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean | undefined;
    /**
     * Accessibility label for the chip. This is read by the screen reader when the user taps the chip.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on close button press. The close button appears only when this prop is specified.
     */
    onClose?: (() => void) | undefined;
    /**
     * Style of chip's text
     */
    textStyle?: any;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: Theme;
    /**
     * Pass down testID from chip props to touchable for Detox tests.
     */
    testID?: string | undefined;
}, any> & typeof Chip) | (React.FunctionComponent<Pick<import("react-native").ViewProps & {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: Theme;
}, "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Mode of the chip.
     * - `flat` - flat chip without outline.
     * - `outlined` - chip with an outline.
     */
    mode?: "outlined" | "flat" | undefined;
    /**
     * Text content of the `Chip`.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    icon?: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[] | Readonly<{
        source: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[];
        direction: "rtl" | "ltr" | "auto";
    }> | ((props: {
        size: number;
        allowFontScaling?: boolean | undefined;
    } & {
        color: string;
    }) => React.ReactNode) | undefined;
    /**
     * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    avatar?: React.ReactNode;
    /**
     * Whether chip is selected.
     */
    selected?: boolean | undefined;
    /**
     * Whether to style the chip color as selected.
     */
    selectedColor?: string | undefined;
    /**
     * Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean | undefined;
    /**
     * Accessibility label for the chip. This is read by the screen reader when the user taps the chip.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on close button press. The close button appears only when this prop is specified.
     */
    onClose?: (() => void) | undefined;
    /**
     * Style of chip's text
     */
    textStyle?: any;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: Theme;
    /**
     * Pass down testID from chip props to touchable for Detox tests.
     */
    testID?: string | undefined;
}> & typeof Chip), {}>) | (React.FunctionComponent<Pick<Pick<import("react-native").ViewProps & {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: Theme;
}, "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Mode of the chip.
     * - `flat` - flat chip without outline.
     * - `outlined` - chip with an outline.
     */
    mode?: "outlined" | "flat" | undefined;
    /**
     * Text content of the `Chip`.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    icon?: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[] | Readonly<{
        source: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[];
        direction: "rtl" | "ltr" | "auto";
    }> | ((props: {
        size: number;
        allowFontScaling?: boolean | undefined;
    } & {
        color: string;
    }) => React.ReactNode) | undefined;
    /**
     * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    avatar?: React.ReactNode;
    /**
     * Whether chip is selected.
     */
    selected?: boolean | undefined;
    /**
     * Whether to style the chip color as selected.
     */
    selectedColor?: string | undefined;
    /**
     * Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean | undefined;
    /**
     * Accessibility label for the chip. This is read by the screen reader when the user taps the chip.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on close button press. The close button appears only when this prop is specified.
     */
    onClose?: (() => void) | undefined;
    /**
     * Style of chip's text
     */
    textStyle?: any;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: Theme;
    /**
     * Pass down testID from chip props to touchable for Detox tests.
     */
    testID?: string | undefined;
}, "style" | "children" | "icon" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "selected" | "disabled" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "mode" | "avatar" | "selectedColor" | "onClose" | "textStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Pick<import("react-native").ViewProps & {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: Theme;
}, "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Mode of the chip.
     * - `flat` - flat chip without outline.
     * - `outlined` - chip with an outline.
     */
    mode?: "outlined" | "flat" | undefined;
    /**
     * Text content of the `Chip`.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    icon?: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[] | Readonly<{
        source: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[];
        direction: "rtl" | "ltr" | "auto";
    }> | ((props: {
        size: number;
        allowFontScaling?: boolean | undefined;
    } & {
        color: string;
    }) => React.ReactNode) | undefined;
    /**
     * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    avatar?: React.ReactNode;
    /**
     * Whether chip is selected.
     */
    selected?: boolean | undefined;
    /**
     * Whether to style the chip color as selected.
     */
    selectedColor?: string | undefined;
    /**
     * Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean | undefined;
    /**
     * Accessibility label for the chip. This is read by the screen reader when the user taps the chip.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on close button press. The close button appears only when this prop is specified.
     */
    onClose?: (() => void) | undefined;
    /**
     * Style of chip's text
     */
    textStyle?: any;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: Theme;
    /**
     * Pass down testID from chip props to touchable for Detox tests.
     */
    testID?: string | undefined;
}, any> & typeof Chip) | (React.FunctionComponent<Pick<import("react-native").ViewProps & {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: Theme;
}, "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Mode of the chip.
     * - `flat` - flat chip without outline.
     * - `outlined` - chip with an outline.
     */
    mode?: "outlined" | "flat" | undefined;
    /**
     * Text content of the `Chip`.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    icon?: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[] | Readonly<{
        source: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[];
        direction: "rtl" | "ltr" | "auto";
    }> | ((props: {
        size: number;
        allowFontScaling?: boolean | undefined;
    } & {
        color: string;
    }) => React.ReactNode) | undefined;
    /**
     * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    avatar?: React.ReactNode;
    /**
     * Whether chip is selected.
     */
    selected?: boolean | undefined;
    /**
     * Whether to style the chip color as selected.
     */
    selectedColor?: string | undefined;
    /**
     * Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean | undefined;
    /**
     * Accessibility label for the chip. This is read by the screen reader when the user taps the chip.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on close button press. The close button appears only when this prop is specified.
     */
    onClose?: (() => void) | undefined;
    /**
     * Style of chip's text
     */
    textStyle?: any;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: Theme;
    /**
     * Pass down testID from chip props to touchable for Detox tests.
     */
    testID?: string | undefined;
}> & typeof Chip), {}>);
export default _default;
