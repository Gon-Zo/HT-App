import { getDatesStartToLast } from "../../shared/utils/layout.utils";

/**
 * Calender Color Object
 */
export const DATE_COLOR = {
    "START_DATE": {startingDay: true, color: '#50cebb', selected: true},
    "END_DATE": {endingDay: true, color: '#50cebb', selected: true},
    "DEFAULT_DATE": {selected: true, color: '#50cebb'},
    "SELECT_DATE": {color: '#50cebb'}
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
