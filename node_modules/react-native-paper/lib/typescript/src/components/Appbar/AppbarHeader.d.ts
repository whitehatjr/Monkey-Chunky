import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Appbar from './Appbar';
import { Theme } from '../../types';
declare type Props = React.ComponentProps<typeof Appbar> & {
    /**
     * Whether the background color is a dark color. A dark header will render light text and vice-versa.
     */
    dark?: boolean;
    /**
     * Extra padding to add at the top of header to account for translucent status bar.
     * This is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.
     * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
     * Pass `0` or a custom value to disable the default behaviour, and customize the height.
     */
    statusBarHeight?: number;
    /**
     * Content of the header.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: Theme;
    style?: StyleProp<ViewStyle>;
};
/**
 * A component to use as a header at the top of the screen.
 * It can contain the screen title, controls such as navigation buttons, menu button etc.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-header.android.png" />
 *     <figcaption>Android</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-header.ios.png" />
 *     <figcaption>iOS</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   _goBack = () => console.log('Went back');
 *
 *   _handleSearch = () => console.log('Searching');
 *
 *   _handleMore = () => console.log('Shown more');
 *
 *   render() {
 *     return (
 *       <Appbar.Header>
 *         <Appbar.BackAction
 *           onPress={this._goBack}
 *         />
 *         <Appbar.Content
 *           title="Title"
 *           subtitle="Subtitle"
 *         />
 *         <Appbar.Action icon="search" onPress={this._handleSearch} />
 *         <Appbar.Action icon="more-vert" onPress={this._handleMore} />
 *       </Appbar.Header>
 *     );
 *   }
 * }
 * ```
 */
declare class AppbarHeader extends React.Component<Props> {
    static displayName: string;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Pick<Partial<import("react-native").ViewProps> & {
    dark?: boolean | undefined;
    children: React.ReactNode;
    theme: Theme;
    style?: StyleProp<ViewStyle>;
}, "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "dark"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Whether the background color is a dark color. A dark header will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Extra padding to add at the top of header to account for translucent status bar.
     * This is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.
     * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
     * Pass `0` or a custom value to disable the default behaviour, and customize the height.
     */
    statusBarHeight?: number | undefined;
    /**
     * Content of the header.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: Theme;
    style?: StyleProp<ViewStyle>;
}, "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "dark" | "statusBarHeight"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Pick<Partial<import("react-native").ViewProps> & {
    dark?: boolean | undefined;
    children: React.ReactNode;
    theme: Theme;
    style?: StyleProp<ViewStyle>;
}, "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "dark"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Whether the background color is a dark color. A dark header will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Extra padding to add at the top of header to account for translucent status bar.
     * This is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.
     * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
     * Pass `0` or a custom value to disable the default behaviour, and customize the height.
     */
    statusBarHeight?: number | undefined;
    /**
     * Content of the header.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: Theme;
    style?: StyleProp<ViewStyle>;
}, any> & typeof AppbarHeader) | (React.FunctionComponent<Pick<Partial<import("react-native").ViewProps> & {
    dark?: boolean | undefined;
    children: React.ReactNode;
    theme: Theme;
    style?: StyleProp<ViewStyle>;
}, "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "dark"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Whether the background color is a dark color. A dark header will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Extra padding to add at the top of header to account for translucent status bar.
     * This is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.
     * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
     * Pass `0` or a custom value to disable the default behaviour, and customize the height.
     */
    statusBarHeight?: number | undefined;
    /**
     * Content of the header.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: Theme;
    style?: StyleProp<ViewStyle>;
}> & typeof AppbarHeader), {}>) | (React.FunctionComponent<Pick<Pick<Partial<import("react-native").ViewProps> & {
    dark?: boolean | undefined;
    children: React.ReactNode;
    theme: Theme;
    style?: StyleProp<ViewStyle>;
}, "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "dark"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Whether the background color is a dark color. A dark header will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Extra padding to add at the top of header to account for translucent status bar.
     * This is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.
     * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
     * Pass `0` or a custom value to disable the default behaviour, and customize the height.
     */
    statusBarHeight?: number | undefined;
    /**
     * Content of the header.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: Theme;
    style?: StyleProp<ViewStyle>;
}, "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "dark" | "statusBarHeight"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Pick<Partial<import("react-native").ViewProps> & {
    dark?: boolean | undefined;
    children: React.ReactNode;
    theme: Theme;
    style?: StyleProp<ViewStyle>;
}, "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "dark"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Whether the background color is a dark color. A dark header will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Extra padding to add at the top of header to account for translucent status bar.
     * This is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.
     * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
     * Pass `0` or a custom value to disable the default behaviour, and customize the height.
     */
    statusBarHeight?: number | undefined;
    /**
     * Content of the header.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: Theme;
    style?: StyleProp<ViewStyle>;
}, any> & typeof AppbarHeader) | (React.FunctionComponent<Pick<Partial<import("react-native").ViewProps> & {
    dark?: boolean | undefined;
    children: React.ReactNode;
    theme: Theme;
    style?: StyleProp<ViewStyle>;
}, "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "dark"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Whether the background color is a dark color. A dark header will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Extra padding to add at the top of header to account for translucent status bar.
     * This is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.
     * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
     * Pass `0` or a custom value to disable the default behaviour, and customize the height.
     */
    statusBarHeight?: number | undefined;
    /**
     * Content of the header.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: Theme;
    style?: StyleProp<ViewStyle>;
}> & typeof AppbarHeader), {}>);
export default _default;
export { AppbarHeader };
