import React, { memo, useEffect } from 'react'
import ScrollLayout from "../../shared/component/scroll-layout";
import { HomeProps } from "./home.interface";
import BarChart from "../../shared/chart/bar-chart";
import { AppText, LogoComponent, SearchUiButton } from "../../shared/component/component";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getRealEstateList } from "./home.reducer";
import { IRootState } from "../../shared/reducer";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { HomeBarChart } from "./home.component";


// @ts-ignore
import { ECharts } from "react-native-echarts-wrapper";

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
        // dispatch(getRealEstateList())
    }, [])

    const goSearch = () => {
        navigation.navigate("Modal")
    }

    const options = {
        xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
            type: "value"
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: "line"
            }
        ]
    }
    return (
        <ScrollLayout stickyList={[1]}>
            <LogoComponent/>
            <SearchUiButton onPress={goSearch}/>

            <View style={{flex: 1}}>
                <ECharts
                    option={options}
                    backgroundColor="rgba(93, 169, 81, 0.3)"
                />
            </View>

            {/*<View>*/}
            {/*    <Text>토지거래</Text>*/}
            {/*    <Text>순수토지거래</Text>*/}
            {/*    <Text>거축물거래</Text>*/}
            {/*    <Text>주택거래</Text>*/}
            {/*    <Text>아프트거래</Text>*/}
            {/*    <Text>주택매매거래</Text>*/}
            {/*    <Text>아파트매매거래</Text>*/}
            {/*</View>*/}

            {/*<HomeBarChart data={realEstateListData} load={realEstateListLoad}/>*/}

        </ScrollLayout>
    )

}

export default memo(Home);
