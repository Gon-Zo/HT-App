import {DomainTuple} from "victory-core";

export type LineChartProps = {}

export type LineChartState = {}

export type BarChartProps = {
    barData: BarChartState,
    tickFormat?: any[] | { (tick: any, index: number, ticks: any[]): string | number }
    zoomDomain?: { x?: DomainTuple; y?: DomainTuple };
    x : string,
    y : string
}

export type BarChartState = {
    tickFormat: any[]
    tickValue: any[],
    data: any
}

