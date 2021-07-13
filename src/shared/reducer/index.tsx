import {combineReducers} from 'redux'
import count, {CountState} from "../../entity/count/count.reducer";
import dashboard, {DashboardState} from "../../entity/dashboard/dashboard.reducer";
import area, {AreaState} from "../../entity/area/area.reducer";
import home, {HomeState} from "../../entity/home/home.reducer";

export interface IRootState {
    readonly count: CountState
    readonly dashboard: DashboardState
    readonly area: AreaState
    readonly home: HomeState
}

const rootReducer = combineReducers<IRootState>({
    count,
    dashboard,
    area,
    home
})

export default rootReducer
