import * as React from 'react';
import { ViewStyle, StyleProp, TextStyle } from 'react-native';
import { Theme } from '../../types';
declare type Props = {
    /**
     * Initials to show as the text in the `Avatar`.
     */
    label: string;
    /**
     * Size of the avatar.
     */
    size?: number;
    /**
     * Custom color for the text.
     */
    color?: string;
    /**
     * Style for text container
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style for the title.
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: Theme;
};
/**
 * Avatars can be used to represent people in a graphical way.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/avatar-text.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Avatar.Text size={24} label="XD" />
 * );
 * ```
 */
declare class AvatarText extends React.Component<Props> {
    static displayName: string;
    static defaultProps: {
        size: number;
    };
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "label" | "style" | "color" | "size" | "labelStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof AvatarText) | (React.FunctionComponent<Props> & typeof AvatarText), {}>) | (React.FunctionComponent<Pick<Props, "label" | "style" | "color" | "size" | "labelStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof AvatarText) | (React.FunctionComponent<Props> & typeof AvatarText), {}>);
export default _default;
