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
export const toDistanceByDate = (startDate: string, endDate: string): number => {

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
