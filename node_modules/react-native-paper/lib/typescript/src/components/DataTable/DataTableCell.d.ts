import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import TouchableRipple from '../TouchableRipple';
import { $RemoveChildren } from '../../types';
declare type Props = $RemoveChildren<typeof TouchableRipple> & {
    /**
     * Content of the `DataTableCell`.
     */
    children: React.ReactNode;
    /**
     * Align the text to the right. Generally monetary or number fields are aligned to right.
     */
    numeric?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
};
declare class DataTableCell extends React.Component<Props> {
    static displayName: string;
    render(): JSX.Element;
}
export default DataTableCell;
