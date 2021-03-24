import React, {useState, useEffect} from 'react';
import HTBarChart from '../component/chart/bar-chart';
import TextBox from '../component/text-box';

const temp = [
    {title: 'January', value: 20},
    {title: 'February', value: 45},
    {title: 'March', value: 28},
    {title: 'April', value: 100},
    {title: 'May', value: 80},
    {title: 'June', value: 45},
];

const MainBarChart = (props: any) => {

    const [isPayload, setIsPayload] = useState(false);

    const [payload, setPayload] = useState({});

    useEffect(() => {

        const labels = temp.map(payload => payload.title);

        const datasets = temp.map(payload => payload.value);

        const _payload = {labels: labels, datasets: [{data: datasets}]};

        setPayload(_payload);

        setIsPayload(true);
    }, []);

    return (
        <React.Fragment>
            <TextBox text={'지역별 바차트'}/>
            {
                isPayload && <HTBarChart data={payload}/>
            }
        </React.Fragment>
    );
};

export default MainBarChart;
