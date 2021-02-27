import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
declare type Props = React.ComponentProps<typeof View> & {
    /**
     * Content of the `DialogActions`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};
/**
 * A component to show a list of actions in a Dialog.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Button, Dialog, Portal } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     visible: false,
 *   };
 *
 *   _hideDialog = () => this.setState({ visible: false });
 *
 *   render() {
 *     return (
 *       <Portal>
 *         <Dialog
 *           visible={this.state.visible}
 *           onDismiss={this._hideDialog}>
 *           <Dialog.Actions>
 *             <Button onPress={() => console.log("Cancel")}>Cancel</Button>
 *             <Button onPress={() => console.log("Ok")}>Ok</Button>
 *           </Dialog.Actions>
 *         </Dialog>
 *       </Portal>
 *     );
 *   }
 * }
 * ```
 */
declare class DialogActions extends React.Component<Props> {
    static displayName: string;
    render(): JSX.Element;
}
export default DialogActions;
