import { combineReducers } from 'redux'
import count, { CountState } from "../../entity/count/count.reducer";
import dashboard, { DashboardState } from "../../entity/dashboard/dashboard.reducer";
import area, { AreaState } from "../../entity/area/area.reducer";
import home, { HomeState } from "../../entity/home/home.reducer";
import appShared, { AppSharedState } from '../../entity/app-shared/app-shared.reducer'
import filter, { FilterState } from "../../entity/filter/filter.reducer";

export interface IRootState {
    readonly count: CountState
    readonly dashboard: DashboardState
    readonly area: AreaState
    readonly home: HomeState
    readonly appShared: AppSharedState
    readonly filter: FilterState
}

const rootReducer = combineReducers<IRootState>({
    count,
    dashboard,
    area,
    home,
    appShared,
    filter
})

export default rootReducer
