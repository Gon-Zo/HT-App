import { getStatusBarHeight } from "react-native-status-bar-height";
import { isIphoneX, getBottomSpace } from "react-native-iphone-x-helper";
import { Dimensions, Platform, PixelRatio, Animated, StyleProp, TextStyle } from 'react-native';
import * as stream from "stream";

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

const HEADER_TITLE_STYLE: Animated.WithAnimatedValue<StyleProp<TextStyle>> = {
    // fontFamily: "NanumSquare_acB",
    fontWeight: '600',
    fontSize: 18
}

export const SCREEN_OPTION = {
    headerTitleStyle: HEADER_TITLE_STYLE
}

/**
 * date rang 구하는 function
 *
 * @param startDate
 * @param lastDate
 */
export const getDatesStartToLast = (startDate: string, lastDate: string): Array<any> => {

    const regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);

    if (!(regex.test(startDate) && regex.test(lastDate))) return [];

    const result = [];

    const curDate = new Date(startDate);

    while (curDate <= new Date(lastDate)) {
        result.push(curDate.toISOString().split("T")[0]);
        curDate.setDate(curDate.getDate() + 1);
    }

    return result;
}

/**
 * date 간의 차이 날짜 구하기
 *
 * @param startDate
 * @param endDate
 */
export const toDistanceByDate = (startDate: string, endDate: string) : number => {

    const regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);

    if (!(regex.test(startDate) && regex.test(endDate))) return 0;

    const arrayOfStartDate = startDate.split("-");

    const arrayOfEndDate = endDate.split("-");

    const dateOfStart = new Date(Number(arrayOfStartDate[0]), Number(arrayOfStartDate[1]), Number(arrayOfStartDate[2]))

    const dateOfEnd = new Date(Number(arrayOfEndDate[0]), Number(arrayOfEndDate[1]), Number(arrayOfEndDate[2]))

    const distanceTime = dateOfEnd.getTime() - dateOfStart.getTime()

    const distanceDate = distanceTime / (1000 * 60 * 60 * 24)

    return distanceDate
}
