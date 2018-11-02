import 'echarts/lib/chart/radar';

import Charts from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/lib/echarts';
import * as React from 'react';

export class DiamondChart extends React.PureComponent<{}> {
    getOption = () => {
        return {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                x: 'center',
                data: ['Segment 1', 'Segment 2', 'Segment 3', 'Segment 4', 'asdasfaskkj']
            },
            radar: [
                {
                    indicator: [
                        { text: 'Segment 1', max: 100 },
                        { text: 'Segment 2', max: 100 },
                        { text: 'Segment 3', max: 100 },
                        { text: 'Segment 4', max: 100 }
                    ],
                    center: ['50%', '50%'],
                    radius: 180,
                    splitArea: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    }
                },
            ],
            series: [
                {
                    type: 'radar',
                    tooltip: {
                        trigger: 'item'
                    },
                    symbol: null,
                    symbolSize: 0,
                    lineStyle: {
                    },
                    itemStyle: { normal: { areaStyle: { type: 'default' } } },
                    data: [
                        {
                            value: [73, 60, 40, 85],
                            name: 'ABC',
                            areaStyle: {
                                opacity: 0.3
                            },
                            lineStyle: {
                                width: '2',
                                color: '#ff5050'

                            }
                        },
                        {
                            value: [60, 90, 0, 15],
                            name: 'ABC',
                            lineStyle: {
                                width: '2',
                                color: '#00cc99'
                            },
                            areaStyle: {
                                color: '#00cc99',
                                opacity: 0.3
                            }
                        }
                    ]
                },
            ]
        };
    }

    render() {
        return (
            <Charts
                style={{ height: '500px' }}
                option={this.getOption()}
                echarts={echarts}
            />
        );
    }
}
