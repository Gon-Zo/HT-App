import {combineReducers} from 'redux';

import count, {CountState} from '../../module/count/count.reducer';
import price, {PriceState} from '../../module/price/price.reducer';
import area, {AreaState} from '../../module/area/area.reducer';

export interface IRootState {
    readonly count: CountState
    readonly price: PriceState
    readonly area: AreaState
}

const rootReducer = combineReducers<IRootState>({
    count,
    price,
    area
});

export default rootReducer;
