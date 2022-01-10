import * as React from 'react';
import { DefaultNavigatorOptions, NavigationProp, ParamListBase } from '@react-navigation/core';
import { StackNavigationState } from '@react-navigation/routers';
export declare type SimpleNavigationProp = NavigationProp<ParamListBase, string, StackNavigationState, SimpleNavigatorOptions>;
export declare type SimpleNavigatorOptions = {
    title?: string;
    headerShown?: boolean;
    header?: (props: {
        navigation: SimpleNavigationProp;
        scene: any;
        previous?: any;
    }) => React.ReactNode;
};
declare function SimpleNavigator(props: DefaultNavigatorOptions<SimpleNavigatorOptions>): JSX.Element;
export declare const createSimpleNavigator: <ParamList extends Record<string, object | undefined>>() => import("@react-navigation/core").TypedNavigator<ParamList, SimpleNavigatorOptions, typeof SimpleNavigator>;
export {};
