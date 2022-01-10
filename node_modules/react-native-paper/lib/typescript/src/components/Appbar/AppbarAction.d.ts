import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import IconButton from '../IconButton';
import { IconSource } from '../Icon';
declare type Props = React.ComponentProps<typeof IconButton> & {
    /**
     *  Custom color for action icon.
     */
    color?: string;
    /**
     * Name of the icon to show.
     */
    icon: IconSource;
    /**
     * Optional icon size.
     */
    size?: number;
    /**
     * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
};
/**
 * A component used to display an action item in the appbar.
 */
export default class AppbarAction extends React.Component<Props> {
    static displayName: string;
    static defaultProps: {
        size: number;
    };
    render(): JSX.Element;
}
export {};
