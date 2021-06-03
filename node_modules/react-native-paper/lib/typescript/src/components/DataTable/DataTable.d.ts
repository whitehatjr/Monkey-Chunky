import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import DataTableCell from './DataTableCell';
import { DataTableHeader as _DataTableHeader } from './DataTableHeader';
import { DataTableTitle as _DataTableTitle } from './DataTableTitle';
import { DataTablePagination as _DataTablePagination } from './DataTablePagination';
import { DataTableRow as _DataTableRow } from './DataTableRow';
declare type Props = React.ComponentProps<typeof View> & {
    /**
     * Content of the `DataTable`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};
/**
 * Data tables allow displaying sets of data.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/data-table.png" />
 *     <figcaption>Data table</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DataTable } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   render() {
 *     return (
 *       <DataTable>
 *         <DataTable.Header>
 *           <DataTable.Title>Dessert</DataTable.Title>
 *           <DataTable.Title numeric>Calories</DataTable.Title>
 *           <DataTable.Title numeric>Fat</DataTable.Title>
 *         </DataTable.Header>
 *
 *         <DataTable.Row>
 *           <DataTable.Cell>Frozen yogurt</DataTable.Cell>
 *           <DataTable.Cell numeric>159</DataTable.Cell>
 *           <DataTable.Cell numeric>6.0</DataTable.Cell>
 *         </DataTable.Row>
 *
 *         <DataTable.Row>
 *           <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
 *           <DataTable.Cell numeric>237</DataTable.Cell>
 *           <DataTable.Cell numeric>8.0</DataTable.Cell>
 *         </DataTable.Row>
 *
 *         <DataTable.Pagination
 *           page={1}
 *           numberOfPages={3}
 *           onPageChange={(page) => { console.log(page); }}
 *           label="1-2 of 6"
 *         />
 *       </DataTable>
 *     );
 *   }
 * }
 * ```
 */
declare class DataTable extends React.Component<Props> {
    static Header: (React.ComponentClass<Pick<import("react-native").ViewProps & {
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../types").Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & {
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, any> & typeof _DataTableHeader) | (React.FunctionComponent<import("react-native").ViewProps & {
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }> & typeof _DataTableHeader), {}>) | (React.FunctionComponent<Pick<import("react-native").ViewProps & {
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../types").Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & {
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, any> & typeof _DataTableHeader) | (React.FunctionComponent<import("react-native").ViewProps & {
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }> & typeof _DataTableHeader), {}>);
    static Title: (React.ComponentClass<Pick<import("react-native").TouchableWithoutFeedbackProps & {
        children: React.ReactNode;
        numeric?: boolean | undefined;
        sortDirection?: "ascending" | "descending" | undefined;
        numberOfLines?: number | undefined;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, "style" | "children" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "numeric" | "sortDirection"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../types").Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").TouchableWithoutFeedbackProps & {
        children: React.ReactNode;
        numeric?: boolean | undefined;
        sortDirection?: "ascending" | "descending" | undefined;
        numberOfLines?: number | undefined;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, any> & typeof _DataTableTitle) | (React.FunctionComponent<import("react-native").TouchableWithoutFeedbackProps & {
        children: React.ReactNode;
        numeric?: boolean | undefined;
        sortDirection?: "ascending" | "descending" | undefined;
        numberOfLines?: number | undefined;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }> & typeof _DataTableTitle), {}>) | (React.FunctionComponent<Pick<import("react-native").TouchableWithoutFeedbackProps & {
        children: React.ReactNode;
        numeric?: boolean | undefined;
        sortDirection?: "ascending" | "descending" | undefined;
        numberOfLines?: number | undefined;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, "style" | "children" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "numeric" | "sortDirection"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../types").Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").TouchableWithoutFeedbackProps & {
        children: React.ReactNode;
        numeric?: boolean | undefined;
        sortDirection?: "ascending" | "descending" | undefined;
        numberOfLines?: number | undefined;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, any> & typeof _DataTableTitle) | (React.FunctionComponent<import("react-native").TouchableWithoutFeedbackProps & {
        children: React.ReactNode;
        numeric?: boolean | undefined;
        sortDirection?: "ascending" | "descending" | undefined;
        numberOfLines?: number | undefined;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }> & typeof _DataTableTitle), {}>);
    static Row: (React.ComponentClass<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../types").Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../types").Theme> | undefined;
    }>, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        children: React.ReactNode;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../types").Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../types").Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../types").Theme> | undefined;
    }>, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        children: React.ReactNode;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, any> & typeof _DataTableRow) | (React.FunctionComponent<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../types").Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../types").Theme> | undefined;
    }>, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        children: React.ReactNode;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }> & typeof _DataTableRow), {}>) | (React.FunctionComponent<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../types").Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../types").Theme> | undefined;
    }>, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        children: React.ReactNode;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../types").Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../types").Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../types").Theme> | undefined;
    }>, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        children: React.ReactNode;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, any> & typeof _DataTableRow) | (React.FunctionComponent<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../types").Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void | null) | undefined;
        onLongPress?: (() => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../types").Theme> | undefined;
    }>, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
        children: React.ReactNode;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }> & typeof _DataTableRow), {}>);
    static Cell: typeof DataTableCell;
    static Pagination: (React.ComponentClass<Pick<import("react-native").ViewProps & {
        page: number;
        numberOfPages: number;
        label?: React.ReactNode;
        onPageChange: (page: number) => void;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, "label" | "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "page" | "numberOfPages" | "onPageChange"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../types").Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & {
        page: number;
        numberOfPages: number;
        label?: React.ReactNode;
        onPageChange: (page: number) => void;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, any> & typeof _DataTablePagination) | (React.FunctionComponent<import("react-native").ViewProps & {
        page: number;
        numberOfPages: number;
        label?: React.ReactNode;
        onPageChange: (page: number) => void;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }> & typeof _DataTablePagination), {}>) | (React.FunctionComponent<Pick<import("react-native").ViewProps & {
        page: number;
        numberOfPages: number;
        label?: React.ReactNode;
        onPageChange: (page: number) => void;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, "label" | "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityHint" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "accessibilityViewIsModal" | "accessibilityActions" | "onAccessibilityAction" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "page" | "numberOfPages" | "onPageChange"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../types").Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & {
        page: number;
        numberOfPages: number;
        label?: React.ReactNode;
        onPageChange: (page: number) => void;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }, any> & typeof _DataTablePagination) | (React.FunctionComponent<import("react-native").ViewProps & {
        page: number;
        numberOfPages: number;
        label?: React.ReactNode;
        onPageChange: (page: number) => void;
        style?: StyleProp<ViewStyle>;
        theme: import("../../types").Theme;
    }> & typeof _DataTablePagination), {}>);
    render(): JSX.Element;
}
export default DataTable;
