import { PlatformOSType } from 'react-native';
import { Fonts } from '../types';
export default function configureFonts(config?: {
    [platform in PlatformOSType | 'default']?: Fonts;
}): Fonts;
