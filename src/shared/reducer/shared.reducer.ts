import axios from 'axios'

// @ts-ignore
import { IBaseReducer } from "../../shared/component/component.interface";
import { FAILURE, REQUEST, SUCCESS } from "../../shared/utils/action-utils";
import { IRootState } from "../../shared/reducer";

const ACTION_TYPES = {
    FETCH_AREA_CODES: "dashboard/FETCH_AREA_CODES"
}

interface ISharedData extends IBaseReducer {
    data: Array<AreaCodeType>
}

type AreaCodeType = {
    id: number
    code: string
    name: string
    type: string
    createBy: string
    createDate: string,
    SubAreaCodeList: Array<AreaCodeType>
}

const initialState = {
    areaCodes: {} as ISharedData
}

export type SharedState = Readonly<typeof initialState>

export default (state = initialState, action: any): SharedState => {
    switch (action.type) {
        case SUCCESS(ACTION_TYPES.FETCH_AREA_CODES): {
            return {
                ...state,
                areaCodes: {
                    load: false,
                    error: null,
                    data: action.payload.data as Array<AreaCodeType>
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

        const {shared}: IRootState = await getState()

        const areaCodes = shared.areaCodes

        if (typeof areaCodes.data == "undefined" || areaCodes.data == null || areaCodes.data.length == 0) {
            await dispatch({type: ACTION_TYPES.FETCH_AREA_CODES, payload: axios.get(areaApiUri)})
        }
    }
}
