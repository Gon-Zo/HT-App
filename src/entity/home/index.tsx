import React, {memo} from 'react'
import ScrollLayout from "../../shared/component/scroll-layout";
import {HomeProps} from "./home.interface";
import LineChart from "../../shared/chart/line-chart";
import BarChart from "../../shared/chart/bar-chart";
import {LogoComponent, SearchUiButton} from "../../shared/component/component";


const Home = (props: HomeProps) => {

    const {navigation} = props

    const goSearch = () => {
        navigation.navigate("Modal")
    }

    return (
        <ScrollLayout stickyList={[1]}>
            <LogoComponent/>
            <SearchUiButton onPress={goSearch}/>
            <LineChart/>
            <BarChart/>
        </ScrollLayout>
    )

}

export default memo(Home);
