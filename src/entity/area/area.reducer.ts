import axios from 'axios'
import {IBaseReducer} from "../../shared/component/component.interface";
import {FAILURE, REQUEST, SUCCESS} from "../../shared/utils/action-utils";

const ACTION_TYPES = {
    FETCH_AREA_CODES: "area/FETCH_AREA_CODES"
}

const initialState = {
    areaCodes: {} as IBaseReducer
}

export type AreaState = Readonly<typeof initialState>

export default (state = initialState, action: any): AreaState => {
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
        case REQUEST(ACTION_TYPES.FETCH_AREA_CODES) : {
            return {
                ...state,
                areaCodes: {
                    load: true,
                    error: null,
                    data: []
                }
            }
        }
        case FAILURE(ACTION_TYPES.FETCH_AREA_CODES) : {
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

export const getAreaCodes = () =>{
    const apiUri = "/api/area-code"
    return async (dispatch : any , getState : any) =>{
        await dispatch({type : ACTION_TYPES.FETCH_AREA_CODES , payload : axios.get(apiUri)})
    }
}
