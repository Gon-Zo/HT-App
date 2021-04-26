import React, {useEffect} from 'react';
import ScrollerLayout from '../../shared/common/scroller-layout';
import AreaChartComponent from './area-chart-component';
import {IAreaDetailProps} from './area.interface';
import {BackButton} from '../component/public/ht-button';

const AreaDetail = (props: IAreaDetailProps) => {

    const {navigation} = props;

    useEffect(() => {
        navigation.setOptions({
            headerTitle: '아파트명',
            headerLeft: (props: any) => (<BackButton navigation={navigation}/>),
            headerStyle: {
                height: 110,
            },
        });
    }, []);

    return (
        <ScrollerLayout>
            <AreaChartComponent text={'매매가격지수'} open={true}/>
            <AreaChartComponent text={'전월세통합지수'} open={false}/>
            <AreaChartComponent text={'전세가격지수'} open={false}/>
            <AreaChartComponent text={'월세가격지수'} open={false}/>
            <AreaChartComponent text={'매매가격'} open={false}/>
            <AreaChartComponent text={'전세가격'} open={false}/>
            <AreaChartComponent text={'월세가격'} open={false}/>
            <AreaChartComponent text={'매매가격 대비 전세가격'} open={false}/>
            <AreaChartComponent text={'전세가격 대비 보증금'} open={false}/>
            <AreaChartComponent text={'수급동향'} open={false}/>
            <AreaChartComponent text={'기타'} open={false}/>
        </ScrollerLayout>
    );
};


export default AreaDetail;
