import {useState, useEffect} from "react";
import ReactECharts from "echarts-for-react";
import 'echarts-liquidfill'

function LiquidFill() {
    const precent = 0.9205
    function getColor(value) {
        return value > 0 && value <= 0.5 ? 'rgba(97,216,0,.7)'
            : value > 0.5 && value <= 0.8 ? 'rgba(204,178,26,.7)'
                : value > 0.8 ? 'rgba(241,47,28,.7)' : '#c7c7cb'
    }

    function getOptions() {
        return {
            series: [{
                type: 'liquidFill',
                data: [precent],
                label: {
                    formatter: (v) => {
                        return `${(v.data * 100).toFixed(2)}%`
                    },
                    textStyle: {
                        fontSize: 36,
                        color: '#999',
                        fontWeight: 'normal'
                    },
                    position: ['50%', '50%'],
                    insideColor: '#fff'
                },
                radius: '80%',
                outline: {
                    itemStyle: {
                        borderColor: '#aaa4a4',
                        borderWidth: 1,
                        color: 'none',
                        shadowBlur: 0,
                        shadowColor: '#fff'
                    },
                    borderDistance: 0
                },
                backgroundStyle: {
                    color: '#fff'
                },
                itemStyle: {
                    shadowBlur: 0,
                    shadowColor: '#fff'
                },
                amplitude: 8,
                color: [getColor(precent)]
            }]
        }
    }

    return <ReactECharts option={getOptions()} style={{height: '100%'}} />
}

export default  LiquidFill
