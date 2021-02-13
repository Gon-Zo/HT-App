import {combineReducers} from 'redux'

import count, {CountState} from '../../module/count/count.reducer'
import price , {PriceState} from '../../module/price/price.reducer';

export interface IRootState {
    readonly count: CountState
    readonly price : PriceState
}

const rootReducer = combineReducers<IRootState>({
    count,
    price
})

export default rootReducer
