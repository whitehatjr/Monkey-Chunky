import * as React from 'react';
declare type Props = {
    /**
     * Function to execute on selection change.
     */
    onAccordionPress?: (expandedId: string | number) => void;
    /**
     * Id of the currently expanded list accordion
     */
    expandedId?: string | number;
    /**
     * React elements containing list accordions
     */
    children: React.ReactNode;
};
export declare type ListAccordionGroupContextType = {
    expandedId: string | number | undefined;
    onAccordionPress: (expandedId: string | number) => void;
} | null;
export declare const ListAccordionGroupContext: React.Context<ListAccordionGroupContextType>;
/**
 * List.AccordionGroup allows to control a group of List Accordions. Id prop for List.Accordion is required in order to group to work.
 * List.AccordionGroup can be controlled or uncontrolled component. Example shows uncontrolled version.
 * At most one Accordion will be expanded in given time.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View, Text } from 'react-native';
 * import { List } from 'react-native-paper';
 *
 * function MyComponent() {
 *  return (
 *   <List.AccordionGroup>
 *     <List.Accordion title="Accordion 1" id="1">
 *       <List.Item title="Item 1" />
 *     </List.Accordion>
 *     <List.Accordion title="Accordion 2" id="2">
 *       <List.Item title="Item 2" />
 *     </List.Accordion>
 *     <View>
 *       <Text>
 *         List.Accordion can be wrapped because implementation uses React.Context.
 *       </Text>
 *       <List.Accordion title="Accordion 3" id="3">
 *         <List.Item title="Item 3" />
 *       </List.Accordion>
 *     </View>
 *   </List.AccordionGroup>
 *  );
 * }
 *```
 */
declare type State = {
    expandedId: string | number | undefined;
};
declare class ListAccordionGroup extends React.Component<Props, State> {
    static displayName: string;
    state: State;
    onAccordionPress: (expandedId: React.ReactText) => void;
    render(): JSX.Element;
}
export default ListAccordionGroup;
