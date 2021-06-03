import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { $Omit } from './../../types';
import AppbarAction from './AppbarAction';
declare type Props = $Omit<React.ComponentProps<typeof AppbarAction> & {
    /**
     *  Custom color for back icon.
     */
    color?: string;
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
}, 'icon'>;
/**
 * A component used to display a back button in the appbar.
 */
declare class AppbarBackAction extends React.Component<Props> {
    static displayName: string;
    static defaultProps: {
        accessibilityLabel: string;
    };
    render(): JSX.Element;
}
export default AppbarBackAction;
