import React from 'react';
import ScrollerLayout from '../../shared/common/scroller-layout';
import {ChartComponent} from './area.component';

const AreaDetail = (props: any) => {

    return (
        <ScrollerLayout>
            <ChartComponent text={'매매가격지수'}/>
            <ChartComponent text={'전월세통합지수'}/>
            <ChartComponent text={'전세가격지수'}/>
            <ChartComponent text={'월세가격지수'}/>
            <ChartComponent text={'매매가격'}/>
            <ChartComponent text={'전세가격'}/>
            <ChartComponent text={'월세가격'}/>
            <ChartComponent text={'매매가격 대비 전세가격'}/>
            <ChartComponent text={'전세가격 대비 보증금'}/>
            <ChartComponent text={'수급동향'}/>
            <ChartComponent text={'기타'}/>
        </ScrollerLayout>
    );
};


export default AreaDetail;
