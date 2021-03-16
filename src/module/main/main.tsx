import React from 'react'
import Layout from '../../shared/Layout';
import MainBarChart from './main-bar-chart';
import MainPieChart from './main-pie-chart';

const Main = (props: any) => {
    return (
        <Layout>
            <MainBarChart/>
            <MainPieChart/>
        </Layout>
    );
};

export default Main
