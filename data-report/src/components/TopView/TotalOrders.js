import {useState} from "react";
import ReactECharts from 'echarts-for-react';

import CommonCard from "./CommonCard";


function TotalOrders() {
    const [orderToday, setOrderToday] = useState('7,078,182');
    const [orderLastDay, setOrderLastDay] = useState('2,000,000');
    const [orderTrend, setOrderTrend] = useState([620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620]);

    const getOptions = () => {
        return orderTrend.length > 0 ? {
            xAxis: {
                type: 'category',
                show: false, // 隐藏X轴
                boundaryGap: false // 填满X轴空隙
            },
            yAxis: {
                show: false // 隐藏Y轴
            },
            series: [{
                type: 'line',
                data: orderTrend,
                areaStyle: {
                    color: 'purple' // 填充面积
                },
                lineStyle: {
                    width: 0 // 线宽
                },
                itemStyle: {
                    opacity: 0 // 隐藏点
                },
                smooth: true // 是否平滑曲线显示
            }], grid: { // 填满区域
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }
        } : null
    }

    const footer = (<>
        <span>昨日订单量 </span>
        <span className="emphasis">{orderLastDay}</span>
    </>)

    return (
        <CommonCard
            title="累计订单量"
            value={orderToday}
            footer={footer}
        >
            <ReactECharts option={getOptions()} />
        </CommonCard>
    );
}

export default TotalOrders;
