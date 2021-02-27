import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare type Props = {
    /**
     * Function to execute on selection change.
     */
    onValueChange: (value: string) => void;
    /**
     * Value of the currently selected toggle button.
     */
    value: string;
    /**
     * React elements containing toggle buttons.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};
/**
 * Toggle button row renders a group of toggle buttons in a row.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { ToggleButton } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     value: 'left',
 *   };
 *
 *   render() {
 *     return(
 *       <ToggleButton.Row
 *         onValueChange={value => this.setState({ value })}
 *         value={this.state.value}
 *       >
 *           <ToggleButton icon="format-align-left" value="left" />
 *           <ToggleButton icon="format-align-right" value="right" />
 *       </ToggleButton.Row>
 *     )
 *   }
 * }
 *```
 */
declare class ToggleButtonRow extends React.Component<Props> {
    static displayName: string;
    render(): JSX.Element;
}
export default ToggleButtonRow;
