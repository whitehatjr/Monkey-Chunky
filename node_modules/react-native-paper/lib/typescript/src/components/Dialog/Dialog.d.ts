import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import DialogContent from './DialogContent';
import DialogActions from './DialogActions';
import { DialogTitle as _DialogTitle } from './DialogTitle';
import DialogScrollArea from './DialogScrollArea';
import { Theme } from '../../types';
declare type Props = {
    /**
     * Determines whether clicking outside the dialog dismiss it.
     */
    dismissable?: boolean;
    /**
     * Callback that is called when the user dismisses the dialog.
     */
    onDismiss?: () => void;
    /**
     * Determines Whether the dialog is visible.
     */
    visible: boolean;
    /**
     * Content of the `Dialog`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: Theme;
};
/**
 * Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.
 * To render the `Dialog` above other components, you'll need to wrap it with the [`Portal`](portal.html) component.
 *
 *  <div class="screenshots">
 *   <img class="medium" src="screenshots/dialog-1.png" />
 *   <img class="medium" src="screenshots/dialog-2.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     visible: false,
 *   };
 *
 *   _showDialog = () => this.setState({ visible: true });
 *
 *   _hideDialog = () => this.setState({ visible: false });
 *
 *   render() {
 *     return (
 *       <View>
 *         <Button onPress={this._showDialog}>Show Dialog</Button>
 *         <Portal>
 *           <Dialog
 *              visible={this.state.visible}
 *              onDismiss={this._hideDialog}>
 *             <Dialog.Title>Alert</Dialog.Title>
 *             <Dialog.Content>
 *               <Paragraph>This is simple dialog</Paragraph>
 *             </Dialog.Content>
 *             <Dialog.Actions>
 *               <Button onPress={this._hideDialog}>Done</Button>
 *             </Dialog.Actions>
 *           </Dialog>
 *         </Portal>
 *       </View>
 *     );
 *   }
 * }
 * ```
 */
declare class Dialog extends React.Component<Props> {
    static Content: typeof DialogContent;
    static Actions: typeof DialogActions;
    static Title: (React.ComponentClass<Pick<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: Theme;
    }, "style" | "children" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: Theme;
    }, any> & typeof _DialogTitle) | (React.FunctionComponent<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: Theme;
    }> & typeof _DialogTitle), {}>) | (React.FunctionComponent<Pick<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: Theme;
    }, "style" | "children" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: Theme;
    }, any> & typeof _DialogTitle) | (React.FunctionComponent<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: Theme;
    }> & typeof _DialogTitle), {}>);
    static ScrollArea: typeof DialogScrollArea;
    static defaultProps: {
        dismissable: boolean;
        visible: boolean;
    };
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "style" | "children" | "visible" | "dismissable" | "onDismiss"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof Dialog) | (React.FunctionComponent<Props> & typeof Dialog), {}>) | (React.FunctionComponent<Pick<Props, "style" | "children" | "visible" | "dismissable" | "onDismiss"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof Dialog) | (React.FunctionComponent<Props> & typeof Dialog), {}>);
export default _default;
