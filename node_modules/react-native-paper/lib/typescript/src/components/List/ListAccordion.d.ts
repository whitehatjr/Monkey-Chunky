import * as React from 'react';
import { ViewStyle, StyleProp, TextStyle } from 'react-native';
import { Theme } from '../../types';
declare type Props = {
    /**
     * Title text for the list accordion.
     */
    title: React.ReactNode;
    /**
     * Description text for the list accordion.
     */
    description?: React.ReactNode;
    /**
     * Callback which returns a React element to display on the left side.
     */
    left?: (props: {
        color: string;
    }) => React.ReactNode;
    /**
     * Whether the accordion is expanded
     * If this prop is provided, the accordion will behave as a "controlled component".
     * You'll need to update this prop when you want to toggle the component or on `onPress`.
     */
    expanded?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * Content of the section.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: Theme;
    /**
     * Style that is passed to the wrapping TouchableRipple element.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style that is passed to Title element.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Style that is passed to Description element.
     */
    descriptionStyle?: StyleProp<TextStyle>;
    /**
     * Truncate Title text such that the total number of lines does not
     * exceed this number.
     */
    titleNumberOfLines?: number;
    /**
     * Truncate Description text such that the total number of lines does not
     * exceed this number.
     */
    descriptionNumberOfLines?: number;
    /**
     * Id is used for distinguishing specific accordion when using List.AccordionGroup. Property is required when using List.AccordionGroup and has no impact on behavior when using standalone List.Accordion.
     */
    id?: string | number;
};
declare type State = {
    expanded: boolean;
};
/**
 * A component used to display an expandable list item.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/list-accordion-1.png" />
 *   <img class="medium" src="screenshots/list-accordion-2.png" />
 *   <img class="medium" src="screenshots/list-accordion-3.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List, Checkbox } from 'react-native-paper';
 *
 * class MyComponent extends React.Component {
 *   state = {
 *     expanded: true
 *   }
 *
 *   _handlePress = () =>
 *     this.setState({
 *       expanded: !this.state.expanded
 *     });
 *
 *   render() {
 *     return (
 *       <List.Section title="Accordions">
 *         <List.Accordion
 *           title="Uncontrolled Accordion"
 *           left={props => <List.Icon {...props} icon="folder" />}
 *         >
 *           <List.Item title="First item" />
 *           <List.Item title="Second item" />
 *         </List.Accordion>
 *
 *         <List.Accordion
 *           title="Controlled Accordion"
 *           left={props => <List.Icon {...props} icon="folder" />}
 *           expanded={this.state.expanded}
 *           onPress={this._handlePress}
 *         >
 *           <List.Item title="First item" />
 *           <List.Item title="Second item" />
 *         </List.Accordion>
 *       </List.Section>
 *     );
 *   }
 * }
 *
 * export default MyComponent;
 * ```
 */
declare class ListAccordion extends React.Component<Props, State> {
    static displayName: string;
    static defaultProps: Partial<Props>;
    state: {
        expanded: boolean;
    };
    private handlePress;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "style" | "title" | "children" | "onPress" | "left" | "description" | "expanded" | "titleStyle" | "descriptionStyle" | "titleNumberOfLines" | "descriptionNumberOfLines" | "id"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof ListAccordion) | (React.FunctionComponent<Props> & typeof ListAccordion), {}>) | (React.FunctionComponent<Pick<Props, "style" | "title" | "children" | "onPress" | "left" | "description" | "expanded" | "titleStyle" | "descriptionStyle" | "titleNumberOfLines" | "descriptionNumberOfLines" | "id"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof ListAccordion) | (React.FunctionComponent<Props> & typeof ListAccordion), {}>);
export default _default;
