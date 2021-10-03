import axios from 'axios'

// @ts-ignore
import { IBaseReducer } from "../../shared/component/component.interface";
import { FAILURE, REQUEST, SUCCESS } from "../../shared/utils/action-utils";
import { IRootState } from "../../shared/reducer";

const ACTION_TYPES = {
    FETCH_AREA_CODES: "dashboard/FETCH_AREA_CODES"
}

const initialState = {
    areaCodes: {} as IBaseReducer
}

export type AppSharedState = Readonly<typeof initialState>

export default (state = initialState, action: any): AppSharedState => {
    switch (action.type) {
        case SUCCESS(ACTION_TYPES.FETCH_AREA_CODES): {
            return {
                ...state,
                areaCodes: {
                    load: false,
                    error: null,
                    data: action.payload.data
                }
            }
        }
        case REQUEST(ACTION_TYPES.FETCH_AREA_CODES): {
            return {
                ...state,
                areaCodes: {
                    load: true,
                    error: null,
                    data: []
                }
            }
        }
        case FAILURE(ACTION_TYPES.FETCH_AREA_CODES): {
            return {
                ...state,
                areaCodes: {
                    load: false,
                    error: action.payload,
                    data: []
                }
            }
        }
        default : {
            return state
        }
    }
}

const areaApiUri = "/api/area-code"

export const getAreaCodes = () => {

    return async (dispatch: any, getState: any) => {

        const {appShared}: IRootState = await getState()

        const areaCodes = appShared.areaCodes

        if (typeof areaCodes.data == "undefined" || areaCodes.data == null || areaCodes.data.length == 0) {
            await dispatch({type: ACTION_TYPES.FETCH_AREA_CODES, payload: axios.get(areaApiUri)})
        }
    }
}

