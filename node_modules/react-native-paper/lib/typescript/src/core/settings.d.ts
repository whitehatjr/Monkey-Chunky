import * as React from 'react';
import { IconProps } from '../components/MaterialCommunityIcon';
export declare type Settings = {
    icon: ({ name, color, size, direction }: IconProps) => React.ReactNode;
};
export declare const Provider: React.ProviderExoticComponent<React.ProviderProps<Settings>>, Consumer: React.ExoticComponent<React.ConsumerProps<Settings>>;
