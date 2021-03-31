import {LocalData} from '../count/count.interface';

export const ACTION_TYPES = {
    SET_DETAIL_TITLE: 'area/SET_DETAIL_TITLE',
};

const initialState = {
    detailTitle: {} as LocalData,
};

export type AreaState = Readonly<typeof initialState>;

export default (state = initialState, action: any): AreaState => {
    switch (action.type) {
        case ACTION_TYPES.SET_DETAIL_TITLE: {
            return {
                ...state,
                detailTitle: {
                    load: false,
                    error: null,
                    data: action.payload,
                },
            };
        }
        default:
            return state;
    }
}

export const setByDetailTitle = (payload: string) => ({type: ACTION_TYPES.SET_DETAIL_TITLE, payload: payload});
