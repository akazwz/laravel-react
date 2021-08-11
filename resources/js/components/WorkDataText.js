import React from 'react';
import GridLayout from 'react-grid-layout';

const WorkDataText = () => {
    /*const layout = [
        {i: 'a', x: 0, y: 0, w: 6, h: 6, static: true},
        {i: 'b', x: 6, y: 0, w: 6, h: 6, static: true},
        {i: 'c', x: 0, y: 2, w: 6, h: 6, static: true},
        {i: 'd', x: 6, y: 2, w: 6, h: 6, static: true},
    ];*/
    return (
        <div style={{width: '100%', height: '100%'}}>
            <p>this is work data text.</p>
            <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
                <div key="a" data-grid={{x: 0, y: 0, w: 3, h: 2, static: true}}>a</div>
                <div key="b" data-grid={{x: 3, y: 0, w: 3, h: 2, minW: 2, maxW: 4}}>b</div>
                <div key="c" data-grid={{x: 0, y: 0, w: 3, h: 2}}>c</div>
            </GridLayout>
        </div>
    );
};

export default WorkDataText;
