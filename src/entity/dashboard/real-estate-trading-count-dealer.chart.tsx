import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import {
    VictoryBar,
    VictoryChart,
    VictoryContainer,
    VictoryLabel,
    VictoryLegend,
    VictoryTheme
} from "victory-native";
import { H3 } from "../../shared/component/component";
import { CARD_COLOR } from "../../shared/utils/color.utils";
import { styles } from "./dashboard.styles";

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
                ...data,
                x: data.month,
                y: data.total
            }
        })

        setChartData(charData)

    }, [data])

    return (
        <React.Fragment>
            <Modal
                visible={false}
                style={{
                    backgroundColor: 'transparent'
                }}
                animationType={'slide'}
                transparent={true}>
                <View style={styles.modalWrap}>
                    <TouchableOpacity style={styles.modalBg_l}/>
                    <View style={styles.modalContent}>
                        <BarChartComponent data={chartData}/>
                    </View>
                </View>
            </Modal>
            <View style={{marginTop: 10, padding: 5}}>
                <H3 text={'거래주체별 부동산 거래 건수'}
                    styles={{
                        paddingLeft: 8
                    }}/>
                <BarChartComponent data={chartData}/>
            </View>
        </React.Fragment>
    )
}

const BarChartComponent = (props: IRealEstateTradingCountDealerChartProps) => {

    const {data} = props

    return (
        <VictoryChart
            containerComponent={<VictoryContainer disableContainerEvents/>}
            theme={VictoryTheme.material}
            domainPadding={20}>
            <VictoryLegend x={300} y={0}
                           orientation="horizontal"
                           gutter={30}
                           data={[
                               {name: "거래건수", symbol: {fill: CARD_COLOR[0]}}
                           ]}/>

            <VictoryBar
                events={[{
                    target: 'data',
                    eventHandlers: {
                        onPress: () => {
                            return [
                                {
                                    target: "data",
                                    mutation: (props) => {
                                        console.log(">>>>>>>>>>", props)
                                        const fill = props.style && props.style.fill;
                                        return fill === CARD_COLOR[1] ? null : {style: {fill: CARD_COLOR[1]}};
                                    }
                                }
                            ];
                        }
                    }
                }]}
                labels={({datum}) => datum.y}
                style={
                    {
                        data: {fill: CARD_COLOR[0]},
                        labels: {fill: "#000", fontWeight: '800'}
                    }
                }
                labelComponent={<VictoryLabel dy={30}/>}
                data={data}/>
        </VictoryChart>
    )
}

export default React.memo(RealEstateTradingCountDealerChart)
