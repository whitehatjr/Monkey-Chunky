import * as React from 'react';
import { Animated, StyleProp, TextStyle } from 'react-native';
import { Theme, $Omit } from '../types';
declare type Props = $Omit<$Omit<React.ComponentProps<typeof Animated.Text>, 'padding'>, 'type'> & {
    /**
     * Type of the helper text.
     */
    type: 'error' | 'info';
    /**
     * Whether to display the helper text.
     */
    visible?: boolean;
    /**
     * Whether to apply padding to the helper text.
     */
    padding?: 'none' | 'normal';
    /**
     * Text content of the HelperText.
     */
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: Theme;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
};
declare type State = {
    shown: Animated.Value;
    textHeight: number;
};
/**
 * Helper text is used in conjuction with input elements to provide additional hints for the user.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/helper-text.gif" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { HelperText, TextInput } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     text: ''
 *   };
 *
 *   render(){
 *     return (
 *       <View>
 *         <TextInput
 *           label="Email"
 *           value={this.state.text}
 *           onChangeText={text => this.setState({ text })}
 *         />
 *         <HelperText
 *           type="error"
 *           visible={!this.state.text.includes('@')}
 *         >
 *           Email address is invalid!
 *         </HelperText>
 *       </View>
 *     );
 *   }
 * }
 * ```
 */
declare class HelperText extends React.PureComponent<Props, State> {
    static defaultProps: Partial<Props>;
    state: {
        shown: Animated.Value;
        textHeight: number;
    };
    componentDidUpdate(prevProps: Props, prevState: State): void;
    private showText;
    private hideText;
    private handleTextLayout;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, string | number | symbol> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof HelperText) | (React.FunctionComponent<Props> & typeof HelperText), {}>) | (React.FunctionComponent<Pick<Props, string | number | symbol> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof HelperText) | (React.FunctionComponent<Props> & typeof HelperText), {}>);
export default _default;
