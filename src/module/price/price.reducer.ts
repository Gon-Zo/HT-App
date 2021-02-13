import {PriceInterface} from './price.interface';
import {FAILURE, REQUEST, SUCCESS} from '../../shared/utils/action-utils';
import axios from 'axios';
const parser = require('fast-xml-parser');
const he = require('he');

const options = {
    ignoreAttributes: false,
    ignoreNameSpace: false,
    parseNodeValue: true,
    parseAttributeValue: true,
    trimValues: true,
};

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
                    data: action.payload,
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
    const reqUri = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?ServiceKey=0pAYHFBPkd%2BFYQMVlBZnPxCWsbgGCspccauAOqAHVZhVpLec3iEGOFMTNTLWE%2F%2BXny%2B1dEzLcZhAwqvLxJEYFA%3D%3D&pageNo=1&numOfRows=10&LAWD_CD=11110&DEAL_YMD=201512'
    return async (dispatch : any , getState : any) =>{
        dispatch({type : ACTION_TYPES.FETCH_HOMES_PRICE_DATA , payload : axios.get(reqUri)})
    }
    // const requestUri = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev';
    // const pageNo = 1;
    // const numOfRows = 10;
    // const lawdCd = 11110;
    // const dealYmd = 201512;
    // const params = {
    //     ServiceKey: '0pAYHFBPkd%2BFYQMVlBZnPxCWsbgGCspccauAOqAHVZhVpLec3iEGOFMTNTLWE%2F%2BXny%2B1dEzLcZhAwqvLxJEYFA%3D%3D',
    //     pageNo: pageNo,
    //     numOfRows: numOfRows,
    //     'LAWD_CD': lawdCd,
    //     'DEAL_YMD': dealYmd,
    // };
    // return async (dispatch: any, getState: any) => {
    //     await dispatch({
    //         type: ACTION_TYPES.FETCH_HOMES_PRICE_DATA,
    //         payload: axios.get(requestUri, {
    //             params: params, headers: {
    //                 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //                 'Accept': '*/*',
    //             },
    //         }),
    //     });
    // };
};
