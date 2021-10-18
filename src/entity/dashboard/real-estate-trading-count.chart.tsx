import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { H3 } from "../../shared/component/component";
import {
    VictoryChart,
    VictoryLabel,
    VictoryLine,
    VictoryTheme, VictoryZoomContainer,
} from "victory-native";
import Svg from "react-native-svg";
import { CARD_COLOR } from "../../shared/utils/color.utils";
import ButtonGroup from "../../shared/component/button-group";
import { useDispatch } from "react-redux";
import { getByRealEstateTradingCount, setByTrendingNum } from "./dashboard.reducer";
import { ButtonGroupList } from "../../shared/utils/data.utils";

interface IRealEstateTradingCountChartProps {
    data: any | Array<any> | undefined
}

type RealEstateTradingCountState = {
    readonly xLabel: Array<String> | Array<any>
    readonly chartData: Array<any>
}


const RealEstateTradingCountChart = (props: IRealEstateTradingCountChartProps) => {

    const {data} = props

    const dispatch = useDispatch()

    const [state, setState] = useState<RealEstateTradingCountState>({
        xLabel: [],
        chartData: []
    })

    const [trendingNum, setTrendingNum] = useState<number | any>(0)

    useEffect(() => {

        const currentChartData = data.data

        if (typeof currentChartData === "undefined") return;

        const values = currentChartData.map((value: any) => {
            return {
                x: value['date'],
                y: value['count']
            }
        })

        // const chartDataSize = values.length
        // const isLongChartData = chartDataSize > 6
        // const chartData = isLongChartData ? values.slice(0, 6) : values

        const chartData = values

        const newState: RealEstateTradingCountState = {
            xLabel: [],
            chartData
        }

        setState(newState)

    }, [data])

    const toPressButtonGroup = (num: number) => {
        setTrendingNum(num)
        // setZoom({x: [0, 4]})
        dispatch(setByTrendingNum(ButtonGroupList[num].value))
        dispatch(getByRealEstateTradingCount())
    }

    // const [zoom , setZoom] = useState<any>({x: [0, 4]})
    // const toPress1 = () => {
    //     const newZoom = {x : [4 , 8]}
    //     setZoom(newZoom)
    // }
    //
    // const toPress2 = () =>{
    //     const newZoom = {x : [0 , 4]}
    //     setZoom(newZoom)
    // }
    //
    // const onDomainChange = (domain : any) =>{
    //     console.log(">>>>>>>>>>> move", domain)
    // }

    return (
        <View style={{marginTop: 10, padding: 5}}>
            <H3 text={'부동산 거래 건수 추이'} styles={{
                paddingLeft: 8
            }}/>
            <ButtonGroup data={ButtonGroupList}
                         pos={'flex-end'}
                         selectValue={trendingNum}
                         toPress={toPressButtonGroup}/>
            {/*<TouchableOpacity onPress={toPress1}>*/}
            {/*<Text>*/}
            {/*    +*/}
            {/*</Text>*/}
            {/*</TouchableOpacity>*/}
            {/*<TouchableOpacity onPress={toPress2}>*/}
            {/*    <Text>*/}
            {/*        -*/}
            {/*    </Text>*/}
            {/*</TouchableOpacity>*/}
            <Svg>
                <VictoryChart
                    theme={VictoryTheme.material}
                    animate={{
                        duration : 10000
                    }}
                    containerComponent={
                        <VictoryZoomContainer responsive={false}
                                              zoomDimension="x"
                                              // zoomDomain={zoom}
                                              // onZoomDomainChange={onDomainChange}
                                              />
                    }
                >
                    <VictoryLine
                        style={{
                            data: {stroke: CARD_COLOR[0]},
                            parent: {border: "1px solid #ccc"}
                        }}
                        labels={({ datum }) => datum.y}
                        labelComponent={<VictoryLabel dy={-20}/>}
                        data={state.chartData}/>
                </VictoryChart>
            </Svg>
        </View>
    )
}

export default React.memo(RealEstateTradingCountChart)
