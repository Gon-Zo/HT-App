export const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
            ],
        },
    ],
};

export const lineData2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            data: [
                Math.random() * 50,
                Math.random() * 50,
                Math.random() * 50,
                Math.random() * 50,
                Math.random() * 50,
                Math.random() * 50,
            ],
        },
    ],
};

export const progressData = [0.4, 0.6, 1.0, 0.8];

export const barchartData = {
    labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
    ],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43],
        },
    ],
};

export const pieData = [
    {
        name: 'Seoul',
        population: 21500000,
        color: 'rgba(131, 167, 234, 1)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
    {
        name: 'Toronto',
        population: 2800000,
        color: '#F00',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
    {
        name: 'New York',
        population: 8538000,
        color: '#f0f',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
    {
        name: 'Moscow',
        population: 11920000,
        color: 'rgb(0, 0, 255)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
];

export const stackChartData = {
    labels: ['Test1', 'Test2'],
    legend: ['L1', 'L2', 'L3'],
    data: [[60, 60, 60], [30, 30, 60]],
    barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
};
