import React, {useEffect, useState} from 'react';
import {Responsive, WidthProvider} from 'react-grid-layout';
import WorkDataText from '../components/WorkDataText';
import WorkQualityGauge from '../components/WorkQualityGauge';
import WorkAreaPie from '../components/WorkAreaPie';
import '../../css/work-report.css'
import WorkDataCharts from '../components/WorkDataCharts';
import WorkReportSetting from '../components/WorkReportSetting';
import {getWorkReportDataApi} from '../components/Api/workreport';

const WorkReport = () => {
    const ResponsiveGridLayout = WidthProvider(Responsive);
    const [breakpoint, setBreakpoint] = useState('lg');
    const [settingHidden, setSettingHidden] = useState(false);
    const [qualityValue, setQualityValue] = useState(0);
    const breakpoints = {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0};
    const cols = {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2};
    const layouts = {
        lg: [
            {x: 0, y: 0, w: 3, h: 2, i: 'work-data-text', static: true,},
            {x: 3, y: 0, w: 3, h: 2, i: 'work-quality-gauge', static: true,},
            {x: 6, y: 0, w: 3, h: 2, i: 'work-area-pie', static: true,},
            {x: 0, y: 2, w: 9, h: 4, i: 'work-data-charts', static: true,},
            {x: 9, y: 0, w: 3, h: 6, i: 'work-report-setting', static: true,},
        ],
        md: [
            {x: 5, y: 0, w: 5, h: 2, i: 'work-data-text', static: true,},
            {x: 0, y: 2, w: 5, h: 2, i: 'work-quality-gauge', static: true,},
            {x: 5, y: 2, w: 5, h: 2, i: 'work-area-pie', static: true,},
            {x: 0, y: 4, w: 10, h: 3, i: 'work-data-charts', static: true,},
            {x: 0, y: 0, w: 5, h: 2, i: 'work-report-setting', static: true,},
        ],
        sm: [
            {x: 3, y: 0, w: 3, h: 2, i: 'work-data-text', static: true,},
            {x: 0, y: 2, w: 3, h: 2, i: 'work-quality-gauge', static: true,},
            {x: 5, y: 2, w: 3, h: 2, i: 'work-area-pie', static: true,},
            {x: 0, y: 4, w: 6, h: 3, i: 'work-data-charts', static: true,},
            {x: 0, y: 0, w: 3, h: 2, i: 'work-report-setting', static: true,},
        ],
        xs: [
            {x: 0, y: 3, w: 4, h: 3, i: 'work-data-text', static: true,},
            {x: 0, y: 6, w: 4, h: 3, i: 'work-quality-gauge', static: true,},
            {x: 0, y: 9, w: 4, h: 3, i: 'work-area-pie', static: true,},
            {x: 0, y: 12, w: 4, h: 3, i: 'work-data-charts', static: true,},
            {x: 0, y: 0, w: 4, h: 3, i: 'work-report-setting', static: true,},
        ],
        xss: [
            {x: 0, y: 3, w: 2, h: 3, i: 'work-data-text', static: true,},
            {x: 0, y: 6, w: 2, h: 3, i: 'work-quality-gauge', static: true,},
            {x: 0, y: 9, w: 2, h: 3, i: 'work-area-pie', static: true,},
            {x: 0, y: 12, w: 2, h: 3, i: 'work-data-charts', static: true,},
            {x: 0, y: 0, w: 2, h: 3, i: 'work-report-setting', static: true,},
        ],
    };
    const handleBreakPointChange = (breakpoint) => {
        setBreakpoint(breakpoint);
        if (breakpoint !== 'lg') {
            setSettingHidden(false);
        }
    };
    const getWorkReportData = () => {
        getWorkReportDataApi().then((res) => {
            console.log(res);
            if (res.status === 200) {
                setQualityValue(res.data.quality);
            }
        }).catch((err) => {
            console.log(err);
        });
    };
    useEffect(() => {
        getWorkReportData();
    }, [])
    return (
        <>
            <p>{breakpoint}</p>
            <ResponsiveGridLayout className="layout" layouts={layouts}
                                  onBreakpointChange={handleBreakPointChange}
                                  compactType="horizontal"
                                  breakpoints={breakpoints}
                                  cols={cols}>
                <div key="work-data-text" className="work-data-text">
                    <WorkDataText/>
                </div>
                <div id="work-quality-gauge" key="work-quality-gauge" className="work-quality-gauge">
                    <WorkQualityGauge qualityValue={qualityValue}/>
                </div>
                <div key="work-area-pie" className="work-area-pie">
                    <WorkAreaPie/>
                </div>
                <div key="work-data-charts" className="work-data-charts">
                    <WorkDataCharts/>
                </div>
                <div key="work-report-setting" className="work-report-setting" hidden={settingHidden}>
                    <WorkReportSetting/>
                </div>
            </ResponsiveGridLayout>
        </>
    );
};

export default WorkReport;
