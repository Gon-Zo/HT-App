import React, { memo, useEffect } from 'react'
import ScrollLayout from "../../shared/component/scroll-layout";
import { HomeProps } from "./home.interface";
import { LogoComponent, SearchUiButton } from "../../shared/component/component";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../shared/reducer";
import { View } from "react-native";
import { VictoryAxis, VictoryChart, VictoryLine, VictoryPie, VictoryScatter } from "victory-native";

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

    return (
        <ScrollLayout stickyList={[1]}>
            <LogoComponent/>
            <SearchUiButton onPress={goSearch}/>

            <View>
                <VictoryPie
                    colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                    cornerRadius={({datum}) => datum.y * 5}
                    padding={100}
                    data={[
                        {x: 1, y: 2, label: "서울"},
                        {x: 2, y: 3, label: "부산"},
                        {x: 3, y: 5, label: "대구"}
                    ]}
                />
            </View>

            <View>
                <VictoryChart>
                    <VictoryAxis/>
                    <VictoryAxis dependentAxis/>
                    <VictoryLine
                        style={{data: {stroke: "orange"}}}
                        y={(data) => Math.sin(2 * Math.PI * data.x)}
                    />
                    <VictoryScatter
                        y={(data) => Math.sin(2 * Math.PI * data.x)}
                        samples={25}
                        size={5}
                        style={{data: {fill: "tomato"}}}
                    />
                </VictoryChart>
            </View>
        </ScrollLayout>
    )

}

export default memo(Home);
