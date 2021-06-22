import {combineReducers} from 'redux'
import count, {CountState} from "../../entity/count/count.reducer";
import dashboard, {DashboardState} from "../../entity/dashboard/dashboard.reducer";

export interface IRootState {
    readonly count: CountState
    readonly dashboard: DashboardState
}

const rootReducer = combineReducers<IRootState>({
    count,
    dashboard
})

export default rootReducer
