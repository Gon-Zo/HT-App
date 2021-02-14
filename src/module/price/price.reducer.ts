import {PriceInterface} from './price.interface';
import {FAILURE, REQUEST, SUCCESS} from '../../shared/utils/action-utils';
import axios from 'axios';

const ACTION_TYPES = {
    FETCH_HOMES_PRICE_DATA: 'price/FETCH_HOMES_PRICE_DATA',
};

const initialState = {
    priceList: {} as PriceInterface,
};

export type PriceState = Readonly<typeof initialState>

export default (state = initialState, action: any): PriceState => {
    switch (action.type) {
        case SUCCESS(ACTION_TYPES.FETCH_HOMES_PRICE_DATA):
            return {
                ...state,
                priceList: {
                    load: false,
                    error: null,
                    data: action.payload.data.response.body,
                },
            };
        case REQUEST(ACTION_TYPES.FETCH_HOMES_PRICE_DATA):
            return {
                ...state,
                priceList: {
                    load: true,
                    error: null,
                    data: [],
                },
            };
        case FAILURE(ACTION_TYPES.FETCH_HOMES_PRICE_DATA):
            return {
                ...state,
                priceList: {
                    load: false,
                    error: action.payload,
                    data: [],
                },
            };
        default:
            return state;
    }
}

export const getByTest = () => {
    const serviceKey = '0pAYHFBPkd%2BFYQMVlBZnPxCWsbgGCspccauAOqAHVZhVpLec3iEGOFMTNTLWE%2F%2BXny%2B1dEzLcZhAwqvLxJEYFA%3D%3D'
    const monthDay = '201512'
    const localNumber = '11110'
    const reqUri = `http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?ServiceKey=${serviceKey}&pageNo=1&numOfRows=10&LAWD_CD=${localNumber}&DEAL_YMD=${monthDay}`;
    return async (dispatch: any, getState: any) => {
        dispatch({type: ACTION_TYPES.FETCH_HOMES_PRICE_DATA, payload: axios.get(reqUri)});
    };
};
