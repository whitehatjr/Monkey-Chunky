import * as React from 'react';
import { ViewStyle, StyleProp, ImageSourcePropType } from 'react-native';
import { Theme } from '../../types';
declare type Props = {
    /**
     * Image to display for the `Avatar`.
     */
    source: ImageSourcePropType;
    /**
     * Size of the avatar.
     */
    size?: number;
    style?: StyleProp<ViewStyle>;
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
 *     <img class="medium" src="screenshots/avatar-image.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Avatar.Image size={24} source={require('../assets/avatar.png')} />
 * );
 * ```
 */
declare class AvatarImage extends React.Component<Props> {
    static displayName: string;
    static defaultProps: {
        size: number;
    };
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "source" | "style" | "size"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof AvatarImage) | (React.FunctionComponent<Props> & typeof AvatarImage), {}>) | (React.FunctionComponent<Pick<Props, "source" | "style" | "size"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof AvatarImage) | (React.FunctionComponent<Props> & typeof AvatarImage), {}>);
export default _default;
