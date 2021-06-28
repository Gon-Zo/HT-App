import React from 'react'
import {BarChartProps} from "./chart.interface";
import {
    VictoryBar,
    VictoryChart,
    VictoryTheme,
    VictoryAxis,
    VictoryZoomContainer,
    VictoryLabel,
} from "victory-native";

const BarChart = (props: BarChartProps) => {

    const {barData, zoomDomain, tickFormat, x, y} = props

    return (
        <VictoryChart
            containerComponent={
                <VictoryZoomContainer zoomDomain={zoomDomain}/>
            }
            height={350}
            theme={VictoryTheme.material}
            // domainPadding={20}
        >
            <VictoryAxis tickValues={barData.tickValue}
                         tickFormat={barData.tickFormat}/>
            <VictoryAxis
                dependentAxis={true}
                tickFormat={tickFormat}/>
            <VictoryBar labels={({datum}) => datum.y}
                        style={{labels: {fill: "red"}}}
                        labelComponent={<VictoryLabel dy={30}/>}
                        barRatio={3}
                        alignment="start"
                        data={barData.data}
                        x={x}
                        y={y}
            />
        </VictoryChart>
    )
}

export default BarChart
