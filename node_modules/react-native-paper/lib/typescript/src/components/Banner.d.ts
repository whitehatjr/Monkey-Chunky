import * as React from 'react';
import { ViewStyle, StyleProp, Animated } from 'react-native';
import Surface from './Surface';
import { IconSource } from './Icon';
import { Theme, $RemoveChildren } from '../types';
declare type Props = $RemoveChildren<typeof Surface> & {
    /**
     * Whether banner is currently visible.
     */
    visible: boolean;
    /**
     * Content that will be displayed inside banner.
     */
    children: string;
    /**
     * Icon to display for the `Banner`. Can be an image.
     */
    icon?: IconSource;
    /**
     * Action items to shown in the banner.
     * An action item should contain the following properties:
     *
     * - `label`: label of the action button (required)
     * - `onPress`: callback that is called when button is pressed (required)
     *
     * To customize button you can pass other props that button component takes.
     */
    actions: Array<{
        label: string;
        onPress: () => void;
    }>;
    /**
     * Style of banner's inner content.
     * Use this prop to apply custom width for wide layouts.
     */
    contentStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: Theme;
};
declare type State = {
    position: Animated.Value;
    layout: {
        height: number;
        measured: boolean;
    };
};
/**
 * Banner displays a prominent message and related actions.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/banner.gif" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Image } from 'react-native';
 * import { Banner } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     visible: true,
 *   };
 *
 *   render() {
 *     return (
 *       <Banner
 *         visible={this.state.visible}
 *         actions={[
 *           {
 *             label: 'Fix it',
 *             onPress: () => this.setState({ visible: false }),
 *           },
 *           {
 *             label: 'Learn more',
 *             onPress: () => this.setState({ visible: false }),
 *           },
 *         ]}
 *         image={({ size }) =>
 *           <Image
 *             source={{ uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4' }}
 *             style={{
 *               width: size,
 *               height: size,
 *             }}
 *           />
 *         }
 *       >
 *         There was a problem processing a transaction on your credit card.
 *       </Banner>
 *     );
 *   }
 * }
 * ```
 */
declare class Banner extends React.Component<Props, State> {
    state: {
        position: Animated.Value;
        layout: {
            height: number;
            measured: boolean;
        };
    };
    componentDidUpdate(prevProps: Props): void;
    private handleLayout;
    private toggle;
    private show;
    private hide;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "style" | "children" | "icon" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "visible" | "contentStyle" | "actions"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof Banner) | (React.FunctionComponent<Props> & typeof Banner), {}>) | (React.FunctionComponent<Pick<Props, "style" | "children" | "icon" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "visible" | "contentStyle" | "actions"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof Banner) | (React.FunctionComponent<Props> & typeof Banner), {}>);
export default _default;
