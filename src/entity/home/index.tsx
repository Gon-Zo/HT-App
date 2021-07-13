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
            <View>
                <Text>토지거래</Text>
                <Text>순수토지거래</Text>
                <Text>거축물거래</Text>
                <Text>주택거래</Text>
                <Text>아프트거래</Text>
                <Text>주택매매거래</Text>
                <Text>아파트매매거래</Text>
            </View>
            {/*<HomeBarChart data={realEstateListData} load={realEstateListLoad}/>*/}

        </ScrollLayout>
    )

}

export default memo(Home);
