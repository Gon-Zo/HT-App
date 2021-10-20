import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { H3 } from "../../shared/component/component";
import {
    VictoryAxis,
    VictoryChart,
    VictoryLabel, VictoryLegend,
    VictoryLine,
    VictoryTheme, VictoryTooltip, VictoryZoomContainer,
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
    readonly chartData: Array<any>
}

const RealEstateTradingCountChart = (props: IRealEstateTradingCountChartProps) => {

    const {data} = props

    const dispatch = useDispatch()

    const [state, setState] = useState<RealEstateTradingCountState>({
        chartData: []
    })

    const [trendingNum, setTrendingNum] = useState<number | any>(0)

    const [splitNum, setSplitNum] = useState(0)

    useEffect(() => {

        const currentChartData = data.data

        if (typeof currentChartData === "undefined") return;

        const chartData = currentChartData
            .map((value: any) => {
                return {
                    x: value['date'],
                    y: value['count']
                }
            })

        const newState: RealEstateTradingCountState = {
            chartData
        }

        setState(newState)

    }, [data])

    const toPressButtonGroup = (num: number) => {
        setTrendingNum(num)
        const btnData = ButtonGroupList[num]
        setSplitNum(btnData.split)
        dispatch(setByTrendingNum(btnData.value))
        dispatch(getByRealEstateTradingCount())
    }

    return (
        <View style={{marginTop: 10, padding: 5}}>
            <H3 text={'부동산 거래 건수 추이'}
                styles={{
                    paddingLeft: 8
                }}/>
            <ButtonGroup data={ButtonGroupList}
                         pos={'flex-end'}
                         selectValue={trendingNum}
                         toPress={toPressButtonGroup}/>
            <Svg>
                <VictoryChart
                    theme={VictoryTheme.material}
                    animate={{
                        duration: 5000
                    }}>
                    <VictoryLegend x={300} y={0}
                                   orientation="horizontal"
                                   gutter={30}
                                   data={[
                                       {name: "거래건수", symbol: {fill: CARD_COLOR[0]}}
                                   ]}
                    />
                    <VictoryAxis dependentAxis={true}/>
                    <VictoryAxis
                        tickFormat={(x: any, index) => splitNum == 0 ? x : (index % splitNum == 0 ? x : '')}
                    />
                    <VictoryLine
                        style={{
                            data: {stroke: CARD_COLOR[0], strokeWidth: 3},
                            parent: {border: "1px solid #ccc"}
                        }}
                        data={state.chartData}/>
                </VictoryChart>
            </Svg>
        </View>
    )
}

export default React.memo(RealEstateTradingCountChart)
