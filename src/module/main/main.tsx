import React from 'react'
import Layout from '../../shared/Layout';
import MainBarChart from './main-bar-chart';
import MainPieChart from './main-pie-chart';
import MainProgressChart from './main-progress-chart';

const Main = (props: any) => {
    return (
        <Layout>
            <MainBarChart/>
            <MainPieChart/>
            <MainProgressChart/>
        </Layout>
    );
};

export default Main
