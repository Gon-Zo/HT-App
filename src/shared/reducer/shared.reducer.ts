// @ts-ignore
import { IBaseReducer } from "../../shared/component/component.interface";
import { IFilterDate, ISaveFilterDTO } from "../../entity/filter/filter.interface";

const ACTION_TYPES = {
    SET_TAG_VALUE: 'filter/SET_TAG_VALUE',
    SET_FILTER_DATE: 'filter/SET_FILTER_DATE'
}

const initialState = {
    tagSelectValue: [],
    selectDate: {} as IFilterDate
}

export type SharedState = Readonly<typeof initialState>

export default (state = initialState, action: any): SharedState => {
    switch (action.type) {
        case ACTION_TYPES.SET_TAG_VALUE: {
            return {
                ...state,
                tagSelectValue: action.payload
            }
        }
        case ACTION_TYPES.SET_FILTER_DATE: {
            return {
                ...state,
                selectDate: action.payload
            }
        }
        default : {
            return state
        }
    }
}

export const setByTagValue = (payload: any) => ({type: ACTION_TYPES.SET_TAG_VALUE, payload: payload})

export const setBySelectDate = (payload: IFilterDate) => ({type: ACTION_TYPES.SET_FILTER_DATE, payload: payload})

export const setByFilterValue = (payload: ISaveFilterDTO) => {
    return async (dispatch: any, getState: any) => {
        let isStateAble = true

        try {

            await dispatch(setByTagValue(payload.tagSelectValue))

            const selectDate: IFilterDate = {startDate: payload.startDate, endDate: payload.endDate};

            await dispatch(setBySelectDate(selectDate))

        } catch (e) {
            isStateAble = false
            console.log(e)
        } finally {
            return Promise.resolve(isStateAble)
        }

    }
}
