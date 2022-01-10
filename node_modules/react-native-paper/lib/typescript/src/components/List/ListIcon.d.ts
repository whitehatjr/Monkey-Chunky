import * as React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { IconSource } from '../Icon';
declare type Props = {
    /**
     * Icon to show.
     */
    icon: IconSource;
    /**
     * Color for the icon.
     */
    color?: string;
    style?: StyleProp<ViewStyle>;
};
/**
 * A component to show an icon in a list item.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List, Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <List.Icon color={Colors.blue500} icon="folder" />
 * );
 *
 * export default MyComponent;
 * ```
 */
export default class ListIcon extends React.Component<Props> {
    static displayName: string;
    render(): JSX.Element;
}
export {};
