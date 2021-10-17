// @ts-ignore
import { IBaseReducer } from "../../shared/component/component.interface";

const ACTION_TYPES = {}

const initialState = {}

export type SharedState = Readonly<typeof initialState>

export default (state = initialState, action: any): SharedState => {
    switch (action.type) {
        default : {
            return state
        }
    }
}
