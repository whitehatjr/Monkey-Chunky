import * as React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import Title from '../Typography/Title';
import { Theme } from '../../types';
declare type Props = React.ComponentProps<typeof Title> & {
    /**
     * Title text for the `DialogTitle`.
     */
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: Theme;
};
/**
 * A component to show a title in a Dialog.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Paragraph, Dialog, Portal } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     visible: false,
 *   };
 *
 *   _hideDialog = () => this.setState({ visible: false });
 *
 *   render() {
 *     return (
 *       <Portal>
 *         <Dialog
 *           visible={this.state.visible}
 *           onDismiss={this._hideDialog}>
 *           <Dialog.Title>This is a title</Dialog.Title>
 *           <Dialog.Content>
 *             <Paragraph>This is simple dialog</Paragraph>
 *           </Dialog.Content>
 *         </Dialog>
 *       </Portal>
 *     );
 *   }
 * }
 * ```
 */
declare class DialogTitle extends React.Component<Props> {
    static displayName: string;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "style" | "children" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof DialogTitle) | (React.FunctionComponent<Props> & typeof DialogTitle), {}>) | (React.FunctionComponent<Pick<Props, "style" | "children" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof DialogTitle) | (React.FunctionComponent<Props> & typeof DialogTitle), {}>);
export default _default;
export { DialogTitle };
