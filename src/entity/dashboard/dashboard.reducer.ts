import axios from "axios";
import { FAILURE, REQUEST, SUCCESS } from "../../shared/utils/action.utils";
import { IBaseReducer } from "../../shared/component/component.interface";
import { IRootState } from "../../shared/reducer";
import moment from "moment";

const ACTION_TYPES = {
    FETCH_JEONSE_MONTHLY_RENT: 'dashboard/FETCH_JEONSE_MONTHLY_RENT'
}

interface IJeonseMonthlyRent extends IBaseReducer {
    data: undefined | Array<any>
}

const initialState = {
    jeonseMonthlyRentData: {} as IJeonseMonthlyRent
}

export type DashboardState = Readonly<typeof initialState>

export default (state = initialState, action: any): DashboardState => {
    switch (action.type) {
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
        default : {
            return state
        }
    }
}

export const getByJeonseMonthlyRent = () => {

    const apiUrl = '/api/jeonse-monthly-rent'

    return async (dispatch: any, getState: any) => {

        const {shared}: IRootState = await getState()

        const endDate = shared.selectDate.endDate

        if (!endDate) return;

        const date = moment(endDate).format("YYYYMM")

        const params = {
            region: '11110',
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

