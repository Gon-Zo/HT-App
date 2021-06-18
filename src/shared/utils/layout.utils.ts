import {getStatusBarHeight} from "react-native-status-bar-height";
import {isIphoneX, getBottomSpace} from "react-native-iphone-x-helper";
import {Dimensions} from "react-native";

const status = getStatusBarHeight(true);

/**
 * current device ios 11
 */
export const getHeight = () => {
    if (isIphoneX()) {
        return Dimensions.get("window").height - status - getBottomSpace();
    } else {

        return Dimensions.get("window").height - status;
    }
};
