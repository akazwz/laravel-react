import React, {useCallback, useEffect} from 'react';
import * as echarts from 'echarts';

const WorkQualityGauge = (props) => {
    let options = {
        title: {
            text: '达标率',
            top: '50%',
            left: 'center',
            textStyle: {
                color: '#333333',
                fontSize: 14,
                fontWeight: 400,
            },
        },
        animation: true,
        color: ['#1890FF', '#FAD337'],
        series: [{
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            radius: '83%',
            center: ['50%', '50%'],
            pointer: {
                show: false,
            },
            progress: {
                show: true,
                overlap: false,
                roundCap: false,
                clip: false,
                itemStyle: {
                    borderWidth: 0,
                    borderColor: '#464646',
                },
            },
            axisLine: {
                lineStyle: {
                    width: 25,
                },
            },
            splitLine: {
                show: false,
                distance: 0,
                length: 10,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
                distance: 50,
            },
            data: [
                {
                    value: props.qualityValue,
                },
            ],
            detail: {
                fontSize: 32,
                formatter: '{value}%',
                offsetCenter: [0, -5],
                borderWidth: 0,
                color: '#333333',
                fontWeight: 500,
            },
            itemStyle: {
                borderColor: '#FFF',
                borderWidth: 0,
            },
        }]
    };
    const initOrSetWorkQualityChart = () => {
        const workQualityChartBox = document.getElementById('work-quality-chart');
        let workQualityChart = echarts.getInstanceByDom(workQualityChartBox);
        if (!workQualityChart) {
            workQualityChart = echarts.init(workQualityChartBox);
        }
        workQualityChart.setOption(options);
    }
    const resizeChart = () => {
        const workQualityChartBox = document.getElementById('work-quality-chart');
        let workQualityChart = echarts.getInstanceByDom(workQualityChartBox);
        if (!workQualityChart) {
            workQualityChart = echarts.init(workQualityChartBox);
        }
        workQualityChart.resize()
    };
    const onresize = useCallback(() => {
        resizeChart();
    }, []);
    useEffect(() => {
        initOrSetWorkQualityChart();
        setTimeout(() => {
            onresize();
        }, 0);
        window.addEventListener('resize', onresize);
    }, []);
    return (
        <div id="work-quality-chart" className="work-quality-chart"/>
    );
};

export default WorkQualityGauge;
