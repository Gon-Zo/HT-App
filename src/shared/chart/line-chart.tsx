import React, {memo} from 'react'
import {VictoryChart, VictoryLine, VictoryTheme} from "victory-native";
import {LineChartProps} from "./chart.interface";

const data = [
    {x: 1, y: 2},
    {x: 2, y: 3},
    {x: 3, y: 5},
    {x: 4, y: 4},
    {x: 5, y: 7}
]

const LineChart = (props: LineChartProps) => {

    const {} = props

    return (
        <VictoryChart
            theme={VictoryTheme.material}
        >
            <VictoryLine
                style={{
                    data: {stroke: "#c43a31"},
                    parent: {border: "1px solid #ccc"}
                }}
                animate={{
                    duration: 2000,
                    onLoad: {duration: 1000}
                }}
                data={data}
            />
        </VictoryChart>
    )
}


export default memo(LineChart)
