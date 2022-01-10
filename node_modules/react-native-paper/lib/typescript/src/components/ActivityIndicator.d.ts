import * as React from 'react';
import { Animated, StyleProp, View, ViewStyle } from 'react-native';
import { Theme } from '../types';
declare type Props = React.ComponentProps<typeof View> & {
    /**
     * Whether to show the indicator or hide it.
     */
    animating?: boolean;
    /**
     * The color of the spinner.
     */
    color?: string;
    /**
     * Size of the indicator.
     */
    size?: 'small' | 'large' | number;
    /**
     * Whether the indicator should hide when not animating.
     */
    hidesWhenStopped?: boolean;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: Theme;
};
declare type State = {
    timer: Animated.Value;
    fade: Animated.Value;
};
/**
 * Activity indicator is used to present progress of some activity in the app.
 * It can be used as a drop-in for the ActivityIndicator shipped with React Native.
 *
 * <div class="screenshots">
 *   <img src="screenshots/activity-indicator.gif" style="width: 100px;" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ActivityIndicator, Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <ActivityIndicator animating={true} color={Colors.red800} />
 * );
 *
 * export default MyComponent;
 * ```
 */
declare class ActivityIndicator extends React.Component<Props, State> {
    static defaultProps: Partial<Props>;
    state: {
        timer: Animated.Value;
        fade: Animated.Value;
    };
    rotation: Animated.CompositeAnimation | undefined;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    private startRotation;
    private stopRotation;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "style" | "color" | "size" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "animating" | "hidesWhenStopped"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof ActivityIndicator) | (React.FunctionComponent<Props> & typeof ActivityIndicator), {}>) | (React.FunctionComponent<Pick<Props, "style" | "color" | "size" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "animating" | "hidesWhenStopped"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof ActivityIndicator) | (React.FunctionComponent<Props> & typeof ActivityIndicator), {}>);
export default _default;
