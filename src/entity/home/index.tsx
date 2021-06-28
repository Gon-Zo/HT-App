import React, {memo, useEffect} from 'react'
import ScrollLayout from "../../shared/component/scroll-layout";
import {HomeProps} from "./home.interface";
import BarChart from "../../shared/chart/bar-chart";
import {AppText, LogoComponent, SearchUiButton} from "../../shared/component/component";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getRealEstateList} from "./home.reducer";
import {IRootState} from "../../shared/reducer";
import {Text, TouchableOpacity, View} from "react-native";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {HomeBarChart} from "./home.component";

const Home = (props: HomeProps) => {

    const {navigation} = props

    const dispatch = useDispatch()

    const {realEstateListData, realEstateListLoad} = useSelector((state: IRootState) => {
        return {
            realEstateListData: state.home.realEstateList.data,
            realEstateListLoad: state.home.realEstateList.load,
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
            <HomeBarChart data={realEstateListData} load={realEstateListLoad}/>
            {/*<PieChart data={realEstateListData}/>*/}
            {/*<LineChart/>*/}
        </ScrollLayout>
    )

}

export default memo(Home);
