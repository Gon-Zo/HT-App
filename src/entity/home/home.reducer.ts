import {IBaseReducer} from "../../shared/component/component.interface";
import {FAILURE, REQUEST, SUCCESS} from "../../shared/utils/action-utils";
import axios from "axios";

const ACTION_TYPES = {
    FETCH_REAL_ESTATE_LIST: "home/FETCH_REAL_ESTATE_LIST"
}

const initialState = {
    realEstateList: {} as IBaseReducer
}

export type HomeState = Readonly<typeof initialState>

export default (state = initialState, action: any): HomeState => {
    switch (action.type) {
        case SUCCESS(ACTION_TYPES.FETCH_REAL_ESTATE_LIST):
            return {
                ...state,
                realEstateList: {
                    load: false,
                    error: null,
                    data: action.payload.data
                }
            }
        case REQUEST(ACTION_TYPES.FETCH_REAL_ESTATE_LIST):
            return {
                ...state,
                realEstateList: {
                    load: true,
                    error: null,
                    data: state.realEstateList.data
                }
            }
        case FAILURE(ACTION_TYPES.FETCH_REAL_ESTATE_LIST): {
            return {
                ...state,
                realEstateList: {
                    load: false,
                    error: action.payload,
                    data: null
                }
            }
        }
        default:
            return state
    }
}


export const getRealEstateList = () => {
    return async (dispatch: any, getState: any) => {

        const apiUri = "/api/national-statistics/nationwide/number-transactions"

        // "?startDate=202010&endDate=202010&region=11000&isYear=false"

        const params = {
            startDate: '202105',
            endDate: '202105',
            isYear: false
        }

        await dispatch({
            type: ACTION_TYPES.FETCH_REAL_ESTATE_LIST,
            payload: axios.get(apiUri, {
                params: params
            })
        })
    }

}
