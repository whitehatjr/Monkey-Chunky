import * as React from 'react';
declare type Props = {
    visible: boolean;
    close: () => void;
};
declare type State = {
    checked: 'normal' | 'first' | 'second' | 'third' | 'fourth';
};
export default class extends React.Component<Props, State> {
    state: State;
    render(): JSX.Element;
}
export {};
