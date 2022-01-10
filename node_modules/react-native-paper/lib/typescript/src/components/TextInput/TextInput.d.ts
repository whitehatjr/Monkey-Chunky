import * as React from 'react';
import { Animated, TextInput as NativeTextInput } from 'react-native';
import { RenderProps, State } from './types';
import { Theme } from '../../types';
export declare type TextInputProps = React.ComponentPropsWithRef<typeof NativeTextInput> & {
    /**
     * Mode of the TextInput.
     * - `flat` - flat input with an underline.
     * - `outlined` - input with an outline.
     *
     * In `outlined` mode, the background color of the label is derived from `colors.background` in theme or the `backgroundColor` style.
     * This component render TextInputOutlined or TextInputFlat based on that props
     */
    mode?: 'flat' | 'outlined';
    /**
     * If true, user won't be able to interact with the component.
     */
    disabled?: boolean;
    /**
     * The text to use for the floating label.
     */
    label?: string;
    /**
     * Placeholder for the input.
     */
    placeholder?: string;
    /**
     * Whether to style the TextInput with error style.
     */
    error?: boolean;
    /**
     * Callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler.
     */
    onChangeText?: Function;
    /**
     * Selection color of the input
     */
    selectionColor?: string;
    /**
     * Underline color of the input.
     */
    underlineColor?: string;
    /**
     * Sets min height with densed layout. For `TextInput` in `flat` mode
     * height is `64dp` or in dense layout - `52dp` with label or `40dp` without label.
     * For `TextInput` in `outlined` mode
     * height is `56dp` or in dense layout - `40dp` regardless of label.
     * When you apply `heigh` prop in style the `dense` prop affects only `paddingVertical` inside `TextInput`
     */
    dense?: boolean;
    /**
     * Whether the input can have multiple lines.
     */
    multiline?: boolean;
    /**
     * The number of lines to show in the input (Android only).
     */
    numberOfLines?: number;
    /**
     * Callback that is called when the text input is focused.
     */
    onFocus?: (args: any) => void;
    /**
     * Callback that is called when the text input is blurred.
     */
    onBlur?: (args: any) => void;
    /**
     *
     * Callback to render a custom input component such as `react-native-text-input-mask`
     * instead of the default `TextInput` component from `react-native`.
     *
     * Example:
     * ```js
     * <TextInput
     *   label="Phone number"
     *   render={props =>
     *     <TextInputMask
     *       {...props}
     *       mask="+[00] [000] [000] [000]"
     *     />
     *   }
     * />
     * ```
     */
    render?: (props: RenderProps) => React.ReactNode;
    /**
     * Value of the text input.
     */
    value?: string;
    /**
     * Pass `fontSize` prop to modify the font size inside `TextInput`.
     * Pass `height` prop to set `TextInput` height. When `height` is passed,
     * `dense` prop will affect only input's `paddingVertical`.
     * Pass `paddingHorizontal` to modify horizontal padding.
     * This can be used to get MD Guidelines v1 TextInput look.
     */
    style?: any;
    /**
     * @optional
     */
    theme: Theme;
};
/**
 * A component to allow users to input text.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/textinput-flat.focused.png" />
 *     <figcaption>Flat (focused)</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/textinput-flat.disabled.png" />
 *     <figcaption>Flat (disabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/textinput-outlined.focused.png" />
 *     <figcaption>Outlined (focused)</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/textinput-outlined.disabled.png" />
 *     <figcaption>Outlined (disabled)</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { TextInput } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     text: ''
 *   };
 *
 *   render(){
 *     return (
 *       <TextInput
 *         label='Email'
 *         value={this.state.text}
 *         onChangeText={text => this.setState({ text })}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @extends TextInput props https://facebook.github.io/react-native/docs/textinput.html#props
 */
declare class TextInput extends React.Component<TextInputProps, State> {
    static defaultProps: Partial<TextInputProps>;
    static getDerivedStateFromProps(nextProps: TextInputProps, prevState: State): {
        value: string | null | undefined;
    };
    state: {
        labeled: Animated.Value;
        error: Animated.Value;
        focused: boolean;
        placeholder: string | undefined;
        value: string | undefined;
        labelLayout: {
            measured: boolean;
            width: number;
            height: number;
        };
    };
    ref: NativeTextInput | undefined | null;
    componentDidUpdate(prevProps: TextInputProps, prevState: State): void;
    componentWillUnmount(): void;
    private showPlaceholder;
    private hidePlaceholder;
    private timer?;
    private root;
    private showError;
    private hideError;
    private restoreLabel;
    private minmizeLabel;
    private handleFocus;
    private handleBlur;
    private handleChangeText;
    private handleLayoutAnimatedText;
    /**
     * @internal
     */
    setNativeProps(args: Object): void | null | undefined;
    /**
     * Returns `true` if the input is currently focused, `false` otherwise.
     */
    isFocused(): boolean | null | undefined;
    /**
     * Removes all text from the TextInput.
     */
    clear(): void | null | undefined;
    /**
     * Focuses the input.
     */
    focus(): void | null | undefined;
    /**
     * Removes focus from the input.
     */
    blur(): void | null | undefined;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<TextInputProps, "label" | "style" | "ref" | "allowFontScaling" | "numberOfLines" | "onLayout" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "key" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "render" | "onBlur" | "onFocus" | "multiline" | "mode" | "error" | "placeholder" | "autoCapitalize" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "defaultValue" | "editable" | "keyboardType" | "maxLength" | "onChange" | "onChangeText" | "onContentSizeChange" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onScroll" | "onKeyPress" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "inputAccessoryViewID" | "value" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "selectionState" | "spellCheck" | "textContentType" | "scrollEnabled" | "autoCompleteType" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "textAlignVertical" | "underlineColor" | "dense"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<TextInputProps, any> & typeof TextInput) | (React.FunctionComponent<TextInputProps> & typeof TextInput), {}>) | (React.FunctionComponent<Pick<TextInputProps, "label" | "style" | "ref" | "allowFontScaling" | "numberOfLines" | "onLayout" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "key" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "render" | "onBlur" | "onFocus" | "multiline" | "mode" | "error" | "placeholder" | "autoCapitalize" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "defaultValue" | "editable" | "keyboardType" | "maxLength" | "onChange" | "onChangeText" | "onContentSizeChange" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onScroll" | "onKeyPress" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "inputAccessoryViewID" | "value" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "selectionState" | "spellCheck" | "textContentType" | "scrollEnabled" | "autoCompleteType" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "textAlignVertical" | "underlineColor" | "dense"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<TextInputProps, any> & typeof TextInput) | (React.FunctionComponent<TextInputProps> & typeof TextInput), {}>);
export default _default;
