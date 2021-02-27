import * as React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
declare type Props = React.ComponentProps<typeof View> & {
    /**
     * Content of the `DialogScrollArea`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};
/**
 * A component to show a scrollable content in a Dialog. The component only provides appropriate styling.
 * For the scrollable content you can use `ScrollView`, `FlatList` etc. depending on your requirement.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ScrollView } from 'react-native';
 * import { Dialog, Portal, Text } from 'react-native-paper';
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
 *           <Dialog.ScrollArea>
 *             <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
 *               <Text>This is a scrollable area</Text>
 *             </ScrollView>
 *           </Dialog.ScrollArea>
 *         </Dialog>
 *       </Portal>
 *     );
 *   }
 * }
 * ```
 */
declare class DialogScrollArea extends React.Component<Props> {
    static displayName: string;
    render(): JSX.Element;
}
export default DialogScrollArea;
