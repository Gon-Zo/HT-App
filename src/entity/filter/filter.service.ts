import { getDatesStartToLast } from "../../shared/utils/layout.utils";
import { CARD_COLOR } from "../../shared/utils/color.utils";

/**
 * Calender Color Object
 */
export const DATE_COLOR = {
    "START_DATE": {startingDay: true, color: CARD_COLOR[1], selected: true},
    "END_DATE": {endingDay: true, color: CARD_COLOR[1], selected: true},
    "DEFAULT_DATE": {selected: true, color: CARD_COLOR[1]},
    "SELECT_DATE": {color: 'rgb(124,125,203)'}
}

/**
 * Make Markers by calender
 * @param startDate
 * @param endDate
 * @param markedDates
 */
export const getBySelectMarkers = (startDate: string, endDate: string, markedDates: any): void => {

    markedDates[startDate] = DATE_COLOR['START_DATE']

    markedDates[endDate] = DATE_COLOR["END_DATE"]

    const arrayOfDate = getDatesStartToLast(startDate, endDate)

    const max = arrayOfDate.length - 1

    for (let i = 1; i < max; i++) {
        markedDates[arrayOfDate[i]] = DATE_COLOR['SELECT_DATE']
    }

}
