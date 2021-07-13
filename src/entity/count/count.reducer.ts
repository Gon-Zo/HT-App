import {IBaseCount} from "./count.interface";

const ACTION_TYPES = {
    UP_NUMBER: "count/UP_NUMBER",
    DOWN_NUMBER: "count/DOWN_NUMBER",
    SET_NUMBER: "count/SET_NUMBER",
    RESET: "count/RESET"
}

const initialState = {
    number: {} as IBaseCount
}

export type CountState = Readonly<typeof initialState>;

export default (state = initialState, action: any): CountState => {

    switch (action.type) {

        case ACTION_TYPES.UP_NUMBER : {
            return {
                ...state,
                number: {
                    load: false,
                    error: null,
                    data: state.number.data + 1
                }
            }
        }

        case ACTION_TYPES.DOWN_NUMBER : {
            return {
                ...state,
                number: {
                    load: false,
                    error: null,
                    data: state.number.data - 1
                }
            }
        }

        case ACTION_TYPES.SET_NUMBER: {
            return {
                ...state,
                number: {
                    load: false,
                    error: null,
                    data: action.payload
                }
            }
        }

        default: {
            return state
        }

    }
}

export const setNumber = (number: number) => ({type: ACTION_TYPES.SET_NUMBER, payload: number})

export const onUpNumber = () => ({type: ACTION_TYPES.UP_NUMBER})

export const onDownNumber = () => ({type: ACTION_TYPES.DOWN_NUMBER})
