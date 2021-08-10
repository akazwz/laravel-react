import React from 'react';
import GridLayout from 'react-grid-layout';

const WorkDataText = () => {
    const layout = [
        {i: 'a', x: 0, y: 0, w: 6, h: 2, static: true},
        {i: 'b', x: 6, y: 0, w: 6, h: 2, static: true},
        {i: 'c', x: 0, y: 2, w: 6, h: 2, static: true},
        {i: 'd', x: 6, y: 2, w: 6, h: 2, static: true},
    ];
    return (
        <div>
            <p>this is work data text.</p>
            <GridLayout layout={layout} cols={12} rowHeight={6}>
                <div key="a">a</div>
                <div key="b">b</div>
                <div key="c">c</div>
                <div key="d">d</div>
            </GridLayout>
        </div>
    );
};

export default WorkDataText;
