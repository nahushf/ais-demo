import 'echarts-gl';

import Charts from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/lib/echarts';
import * as React from 'react';

export interface ICubeScatterProps {

}

export interface ICubeScatterState {

}

export class CubeScatter extends React.PureComponent<ICubeScatterProps, ICubeScatterState> {

    getOption = () => {
        return {
            tooltip: {},
            xAxis3D: {
                name: 'Incremental Speed',
                type: 'value'
            },
            yAxis3D: {
                name: 'Incremental Margin',
                type: 'value'
            },
            zAxis3D: {
                name: 'Incremental Reach',
                type: 'value'
            },
            grid3D: {
                splitLine: {
                    lineStyle: {
                        color: '#5f5f5f'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisPointer: {
                    lineStyle: {
                        color: '#ffbd67'
                    }
                },
                viewControl: {
                    // zoomSensitivity: 0,
                }
            },
            series: [{
                type: 'scatter3D',
                dimensions: [
                    // config.xAxis3D,
                    // config.yAxis3D,
                    // config.yAxis3D,
                    // config.color,
                    // config.symbolSiz
                ],
                data: [[19.9, 0.285, 0.385, 0.4], [35.8, 0.5, 0.717, 2], [23.5, 0.88, 0.78, 1.6]],
                // data: data.map(function (item, idx) {
                //     return [
                //         item[fieldIndices[config.xAxis3D]],
                //         item[fieldIndices[config.yAxis3D]],
                //         item[fieldIndices[config.zAxis3D]],
                //         item[fieldIndices[config.color]],
                //         item[fieldIndices[config.symbolSize]],
                //         idx
                //     ];
                // }),
                symbolSize: 12,
                // symbol: 'triangle',
                itemStyle: {
                    borderWidth: 1,
                    borderColor: 'rgba(255,255,255,0.8)'
                },
                emphasis: {
                    itemStyle: {
                        color: '#fff'
                    }
                }
            }]
        };
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px', flex: 1, background: '#4a4a4a', borderRadius: '5px' }}>
                <Charts
                    style={{ height: '400px', background: '#4a4a4a', borderRadius: '5px' }}
                    option={this.getOption()}
                    echarts={echarts}
                />
            </div>
        );
    }
}
