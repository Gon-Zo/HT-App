import React, {memo, useEffect} from 'react'
import ScrollLayout from "../../shared/component/scroll-layout";
import {HomeProps} from "./home.interface";
import LineChart from "../../shared/chart/line-chart";
import BarChart from "../../shared/chart/bar-chart";
import {LogoComponent, SearchUiButton} from "../../shared/component/component";
import PieChart from "../../shared/chart/pie-chart";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getRealEstateList} from "./home.reducer";
import {IRootState} from "../../shared/reducer";


const Home = (props: HomeProps) => {

    const {navigation} = props

    const dispatch = useDispatch()

    const {realEstateListData} = useSelector((state: IRootState) => {
        return {
            realEstateListData: state.home.realEstateList.data
        }
    }, shallowEqual)

    useEffect(() => {
        dispatch(getRealEstateList())
    }, [])

    const goSearch = () => {
        navigation.navigate("Modal")
    }

    return (
        <ScrollLayout stickyList={[1]}>
            <LogoComponent/>
            <SearchUiButton onPress={goSearch}/>
            <BarChart barData={realEstateListData}/>
            {/*<PieChart data={realEstateListData}/>*/}
            <LineChart/>
        </ScrollLayout>
    )

}

export default memo(Home);
