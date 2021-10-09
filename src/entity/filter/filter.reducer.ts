import { ISaveFilterDTO } from "../home/filter.interface";
import { arrOfPicker } from "./filter-data";

const ACTION_TYPES = {
    SET_TAG_VALUE: 'filter/SET_TAG_VALUE'
}

const initialState = {
    tagSelectValue: [arrOfPicker[0]],
}

export type FilterState = Readonly<typeof initialState>

export default (state = initialState, action: any): FilterState => {

    switch (action.type) {
        case ACTION_TYPES.SET_TAG_VALUE: {
            return {
                ...state,
                tagSelectValue: action.payload
            }
        }
        default: {
            return state;
        }
    }

}

export const setByTagValue = (payload: any) => ({type: ACTION_TYPES.SET_TAG_VALUE, payload: payload})

export const setByFilterValue = (payload: ISaveFilterDTO) => {
    return async (dispatch: any, getState: any) => {
        let isStateAble = true
        try {
            await dispatch(setByTagValue(payload.tagSelectValue))
        } catch (e) {
            isStateAble = false
            console.log(e)
        } finally {
            return Promise.resolve(isStateAble)
        }
    }
}
