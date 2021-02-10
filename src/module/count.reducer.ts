import {LocalData} from "./count.interface";

export const ACTION_TYPES = {
    UP_NUMBER: "count/UP_NUMBER",
    DOWN_NUMBER: "count/DOWN_NUMBER",
    INITIALIZER_NUMBER : "count/INITIALIZER_NUMBER",
    RESET: "count/reset"
}

const initialState = {
    number: {} as LocalData
}
export type CountState = Readonly<typeof initialState>;

export default (state = initialState, action: any): CountState => {
    switch (action.type) {
        case ACTION_TYPES.UP_NUMBER:
            return {
                ...state,
                number: {
                    load: false,
                    error: null,
                    data: state.number.data + 1
                }
            }
        case ACTION_TYPES.DOWN_NUMBER:
            return {
                ...state,
                number: {
                    load: false,
                    error: null,
                    data: state.number.data - 1
                }
            }
        case ACTION_TYPES.INITIALIZER_NUMBER:
            return {
                ...state,
                number: {
                    load:false,
                    error:null,
                    data : 0
                }
            }
        case ACTION_TYPES.RESET:
            return initialState
        default:
            return state;
    }
}

export const upByNumber = () => ({type : ACTION_TYPES.UP_NUMBER})

export const downByNumber = () => ({type: ACTION_TYPES.DOWN_NUMBER})

export const resetByNumber = () => ({type: ACTION_TYPES.RESET})

export const initByNumber = () => ({type: ACTION_TYPES.INITIALIZER_NUMBER})
