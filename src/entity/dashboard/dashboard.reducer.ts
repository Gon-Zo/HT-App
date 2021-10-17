import axios from "axios";
import { FAILURE, REQUEST, SUCCESS } from "../../shared/utils/action.utils";
import { IBaseReducer } from "../../shared/component/component.interface";
import { IRootState } from "../../shared/reducer";
import moment from "moment";
import { IFilterDate, SaveFilterData } from "./dashboard.interface";

const ACTION_TYPES = {
    FETCH_REAL_ESTATE_TRADING_COUNT: 'dashboard/FETCH_REAL_ESTATE_TRADING_COUNT',
    FETCH_JEONSE_MONTHLY_RENT: 'dashboard/FETCH_JEONSE_MONTHLY_RENT',
    SET_REGION_DATA: 'dashboard/SET_REGION_DATA',
    SET_SELECT_DATE: 'dashboard/SET_SELECT_DATE',
    SET_TRANSACTION_TYPE: 'dashboard/SET_TRANSACTION_TYPE',
    SET_SELECT_REGION: 'dashboard/SET_SELECT_REGION',
    SET_JEONSE_MONTHLY_RENT: 'dashboard/SET_JEONSE_MONTHLY_RENT'
}

interface IDashboardReducer extends IBaseReducer {
    data: undefined | any | Array<any>
}

const initialState = {
    jeonseMonthlyRentData: {} as IDashboardReducer,
    realEstateTradingCount: {} as IDashboardReducer,
    selectDate: {} as IFilterDate,
    region: {} as any,
    transactionType: {} as any,
    selectRegion: {} as any,
}

export type DashboardState = Readonly<typeof initialState>

export default (state = initialState, action: any): DashboardState => {
    switch (action.type) {
        case SUCCESS(ACTION_TYPES.FETCH_REAL_ESTATE_TRADING_COUNT): {
            return {
                ...state,
                realEstateTradingCount: {
                    load: false,
                    error: null,
                    data: action.payload.data
                }
            }
        }
        case SUCCESS(ACTION_TYPES.FETCH_JEONSE_MONTHLY_RENT): {
            return {
                ...state,
                jeonseMonthlyRentData: {
                    load: false,
                    error: null,
                    data: action.payload.data
                }
            }
        }
        case REQUEST(ACTION_TYPES.FETCH_REAL_ESTATE_TRADING_COUNT): {
            return {
                ...state,
                realEstateTradingCount: {
                    load: true,
                    error: null,
                    data: state.realEstateTradingCount.data
                }
            }
        }
        case REQUEST(ACTION_TYPES.FETCH_JEONSE_MONTHLY_RENT): {
            return {
                ...state,
                jeonseMonthlyRentData: {
                    load: true,
                    error: null,
                    data: state.jeonseMonthlyRentData.data
                }
            }
        }
        case FAILURE(ACTION_TYPES.FETCH_REAL_ESTATE_TRADING_COUNT): {
            return {
                ...state,
                realEstateTradingCount: {
                    load: false,
                    error: action.payload,
                    data: undefined
                }
            }
        }
        case FAILURE(ACTION_TYPES.FETCH_JEONSE_MONTHLY_RENT): {
            return {
                ...state,
                jeonseMonthlyRentData: {
                    load: false,
                    error: action.payload,
                    data: undefined
                }
            }
        }
        case ACTION_TYPES.SET_REGION_DATA: {
            return {
                ...state,
                region: action.payload
            }
        }
        case ACTION_TYPES.SET_TRANSACTION_TYPE: {
            return {
                ...state,
                transactionType: action.payload
            }
        }
        case ACTION_TYPES.SET_SELECT_DATE: {
            return {
                ...state,
                selectDate: action.payload
            }
        }
        case ACTION_TYPES.SET_SELECT_REGION: {
            return {
                ...state,
                selectRegion: action.payload
            }
        }
        case ACTION_TYPES.SET_JEONSE_MONTHLY_RENT: {
            return {
                ...state,
                jeonseMonthlyRentData: {
                    load: false,
                    error: null,
                    data: []
                }
            }
        }
        default : {
            return state
        }
    }
}

export const setByRegion = (payload: any) => ({type: ACTION_TYPES.SET_REGION_DATA, payload: payload})

export const setBySelectDate = (payload: any) => ({type: ACTION_TYPES.SET_SELECT_DATE, payload: payload})

const setByTransactionType = (payload: any) => ({type: ACTION_TYPES.SET_TRANSACTION_TYPE, payload: payload})

export const setBySelectRegion = (payload: any) => ({type: ACTION_TYPES.SET_SELECT_REGION, payload: payload})

export const getByJeonseMonthlyRent = () => {
    return async (dispatch: any, getState: any) => {
        const apiUrl = '/api/jeonse-monthly-rent'

        const {dashboard}: IRootState = await getState()

        const endDate = dashboard.selectDate.endDate

        const region = dashboard.region.code

        if (!endDate) return;

        if (dashboard.region.type == 'P') {
            await dispatch({type: ACTION_TYPES.SET_JEONSE_MONTHLY_RENT})
            return
        }

        const date = moment(endDate).format("YYYYMM")

        const params = {
            region: region,
            date: date
        }

        await dispatch({
            type: ACTION_TYPES.FETCH_JEONSE_MONTHLY_RENT,
            payload: axios.get(apiUrl, {
                params
            })
        })
    }
}

export const setByFilterData = (payload: SaveFilterData) => {
    try {
        return async (dispatch: any, getState: any) => {

            await dispatch(setByRegion(payload.pickerObj))

            await dispatch(setBySelectDate(payload.filterDate))

            await dispatch(setByTransactionType(payload.typeObj))

            let selectRegion = {main: payload.pickerData}

            if (Object.keys(payload.subData).length !== 0) {
                selectRegion = {
                    ...selectRegion,
                    // @ts-ignore
                    sub: payload.subData
                }
            }

            await dispatch(setBySelectRegion(selectRegion))
        }
    } catch (e) {
        console.log(e)
    } finally {
    }
}

export const getByRealEstateTradingCount = () => {

    return async (dispatch: any, getState: any) => {

        const apiUri = `/api/national-statistics/number-transactions`

        const {dashboard}: IRootState = await getState()

        const apiCode = 'RealEstateTradingCount'

        const typeCode = 'BUILDING_TRADE'

        const region = dashboard.region.code

        const startDate = moment(dashboard.selectDate.startDate).format("YYYYMM")

        const endDate = moment(dashboard.selectDate.endDate).format("YYYYMM")

        const params = {
            apiCode,
            typeCode,
            startDate,
            endDate,
            region,
            trending : 20
        }

        await dispatch({
            type: ACTION_TYPES.FETCH_REAL_ESTATE_TRADING_COUNT,
            payload: axios.get(apiUri, {
                    params
                }
            )
        })
    }
}
