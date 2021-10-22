import React from "react";
import { View } from "react-native";
import { VictoryBar, VictoryChart, VictoryLegend, VictoryTheme } from "victory-native";
import { H3 } from "../../shared/component/component";
import { CARD_COLOR } from "../../shared/utils/color.utils";

interface IRealEstateTradingCountDealerChartProps {
    readonly data: any | Array<any>
}

const RealEstateTradingCountDealerChart = (props: IRealEstateTradingCountDealerChartProps) => {

    const {data} = props

    const [chartData, setChartData] = React.useState<Array<any> | any>([])

    React.useEffect(() => {

        const fetchData = data.data

        if (typeof fetchData == "undefined") return

        const charData = fetchData.map((data: any, index: number) => {
            return {
                x: data.month,
                y: data.total
            }
        })

        setChartData(charData)

    }, [data])

    return (
        <View style={{marginTop: 10, padding: 5}}>
            <H3 text={'거래주체별 부동산 거래 건수'}
                styles={{
                    paddingLeft: 8
                }}/>
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={20}>
                <VictoryLegend x={300} y={0}
                               orientation="horizontal"
                               gutter={30}
                               data={[
                                   {name: "거래건수", symbol: {fill: CARD_COLOR[0]}}
                               ]}/>
                <VictoryBar
                    style={{data: {fill: CARD_COLOR[0]}}}
                    data={chartData}/>
            </VictoryChart>
        </View>
    )

}

export default React.memo(RealEstateTradingCountDealerChart)
