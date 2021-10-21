import axios from "axios";
import { FAILURE, REQUEST, SUCCESS } from "../../shared/utils/action.utils";
import { IBaseReducer } from "../../shared/component/component.interface";
import { IRootState } from "../../shared/reducer";
import moment from "moment";
import { IFilterDate, SaveFilterData } from "./dashboard.interface";

const ACTION_TYPES = {
    FETCH_REAL_ESTATE_TRADING_COUNT: 'dashboard/FETCH_REAL_ESTATE_TRADING_COUNT',
    FETCH_APARTMENT_RENT: 'dashboard/FETCH_APARTMENT_RENT',
    SET_REGION_DATA: 'dashboard/SET_REGION_DATA',
    SET_SELECT_DATE: 'dashboard/SET_SELECT_DATE',
    SET_TRANSACTION_TYPE: 'dashboard/SET_TRANSACTION_TYPE',
    SET_SELECT_REGION: 'dashboard/SET_SELECT_REGION',
    SET_APARTMENT_RENT: 'dashboard/SET_APARTMENT_RENT',
    SET_TRENDING_NUM: 'dashboard/SET_TRENDING_NUM'
}

interface IDashboardReducer extends IBaseReducer {
    data: undefined | any | Array<any>
}

const initialState = {
    apartmentRent: {} as IDashboardReducer,
    realEstateTradingCount: {} as IDashboardReducer,
    selectDate: {} as IFilterDate,
    region: {} as any,
    transactionType: {} as any,
    selectRegion: {} as any,
    trendingNum: 6 as number | any
}

export type DashboardState = Readonly<typeof initialState>

export default (state = initialState, action: any): DashboardState => {
    switch (action.type) {
        case ACTION_TYPES.SET_TRENDING_NUM: {
            return {
                ...state,
                trendingNum: action.payload
            }
        }
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
        case SUCCESS(ACTION_TYPES.FETCH_APARTMENT_RENT): {
            return {
                ...state,
                apartmentRent: {
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
        case REQUEST(ACTION_TYPES.FETCH_APARTMENT_RENT): {
            return {
                ...state,
                apartmentRent: {
                    load: true,
                    error: null,
                    data: state.apartmentRent.data
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
        case FAILURE(ACTION_TYPES.FETCH_APARTMENT_RENT): {
            return {
                ...state,
                apartmentRent: {
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
        case ACTION_TYPES.SET_APARTMENT_RENT: {
            return {
                ...state,
                apartmentRent: {
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

export const setByTrendingNum = (payload: number) => ({type: ACTION_TYPES.SET_TRENDING_NUM, payload: payload})

export const setByRegion = (payload: any) => ({type: ACTION_TYPES.SET_REGION_DATA, payload: payload})

export const setBySelectDate = (payload: any) => ({type: ACTION_TYPES.SET_SELECT_DATE, payload: payload})

export const setByTransactionType = (payload: any) => ({type: ACTION_TYPES.SET_TRANSACTION_TYPE, payload: payload})

export const setBySelectRegion = (payload: any) => ({type: ACTION_TYPES.SET_SELECT_REGION, payload: payload})

export const getByApartmentRent = () => {
    return async (dispatch: any, getState: any) => {
        const apiUrl = '/api/apartment-rent'

        const {dashboard}: IRootState = await getState()

        const endDate = dashboard.selectDate.endDate

        const region = dashboard.region.code

        if (!endDate) return;

        if (dashboard.region.type == 'P') {
            await dispatch({type: ACTION_TYPES.SET_APARTMENT_RENT})
            return
        }

        const date = moment(endDate).format("YYYYMM")

        const params = {
            region: region,
            date: date
        }

        await dispatch({
            type: ACTION_TYPES.FETCH_APARTMENT_RENT,
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

        const typeCode = dashboard.transactionType.value

        const region = dashboard.region.code

        const trending = dashboard.trendingNum

        const startDate = moment(dashboard.selectDate.startDate).format("YYYYMM")

        const endDate = moment(dashboard.selectDate.endDate).format("YYYYMM")

        const params = {
            apiCode,
            typeCode,
            startDate,
            endDate,
            region,
            trending
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
