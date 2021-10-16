import { combineReducers } from 'redux'
import count, { CountState } from "../../entity/count/count.reducer";
import dashboard, { DashboardState } from "../../entity/dashboard/dashboard.reducer";
import home, { HomeState } from "../../entity/home/home.reducer";
import shared, { SharedState } from './shared.reducer'
import news, { NewsState } from "../../entity/news/new.reducer";

export interface IRootState {
    readonly count: CountState
    readonly dashboard: DashboardState
    readonly home: HomeState
    readonly shared: SharedState
    readonly news: NewsState
}

const rootReducer = combineReducers<IRootState>({
    count,
    dashboard,
    home,
    shared,
    news
})

export default rootReducer
