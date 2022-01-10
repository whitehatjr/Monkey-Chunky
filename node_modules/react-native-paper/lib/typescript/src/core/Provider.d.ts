import * as React from 'react';
import { Settings } from './settings';
import { Theme } from '../types';
declare type Props = {
    children: React.ReactNode;
    theme?: Theme;
    settings?: Settings;
};
export default class Provider extends React.Component<Props> {
    render(): JSX.Element;
}
export {};
