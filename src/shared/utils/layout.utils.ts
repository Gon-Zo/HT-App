import {getStatusBarHeight} from "react-native-status-bar-height";
import {isIphoneX, getBottomSpace} from "react-native-iphone-x-helper";
import { Dimensions, Platform, PixelRatio } from 'react-native';
const status = getStatusBarHeight(true);

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

/**
 * current device ios 11
 */
export const getHeight = () => {
    if (isIphoneX()) {
        return SCREEN_HEIGHT - status - getBottomSpace();
    } else {

        return SCREEN_HEIGHT - status;
    }
};

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export const actuatedNormalize = (size: number) => {

    const newSize = size * scale;

    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }

};
