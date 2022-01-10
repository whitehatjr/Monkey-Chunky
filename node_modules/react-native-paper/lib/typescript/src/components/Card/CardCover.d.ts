import * as React from 'react';
import { ViewStyle, Image, StyleProp } from 'react-native';
import { Theme } from '../../types';
declare type Props = React.ComponentProps<typeof Image> & {
    /**
     * @internal
     */
    index?: number;
    /**
     * @internal
     */
    total?: number;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: Theme;
};
/**
 * A component to show a cover image inside a Card.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends Image props https://facebook.github.io/react-native/docs/image.html#props
 */
declare class CardCover extends React.Component<Props> {
    static displayName: string;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "source" | "style" | "onLayout" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "index" | "total"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof CardCover) | (React.FunctionComponent<Props> & typeof CardCover), {}>) | (React.FunctionComponent<Pick<Props, "source" | "style" | "onLayout" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "index" | "total"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof CardCover) | (React.FunctionComponent<Props> & typeof CardCover), {}>);
export default _default;
export { CardCover };
