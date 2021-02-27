import * as React from 'react';
declare type State = {
    index: number;
    routes: Array<{
        key: string;
        title: string;
        icon: string;
        color?: string;
        badge?: boolean;
        getAccessibilityLabel?: string;
        getTestID?: string;
    }>;
};
export default class BottomNavigationExample extends React.Component<{}, State> {
    static title: string;
    state: {
        index: number;
        routes: ({
            key: string;
            title: string;
            icon: string;
            color: string;
            badge?: undefined;
        } | {
            key: string;
            title: string;
            icon: string;
            color: string;
            badge: boolean;
        })[];
    };
    render(): JSX.Element;
}
export {};
