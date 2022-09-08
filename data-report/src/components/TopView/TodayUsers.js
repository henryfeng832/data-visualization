import CommonCard from "./CommonCard";
import {useState} from "react";
import ReactECharts from "echarts-for-react";

function TodayUsers() {
    const [orderUser, setOrderUser] = useState('1,355,833');
    const [returnRate, setReturnRate] = useState('5.51%');
    const [orderUserTrend, setOrderUserTrend] = useState([410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150]);

    const getOptions = () => {
        return {
            color: ['#3398DB'], // 主题颜色
            tooltip: {},
            series: [{
                name: '用户实时交易量',
                type: 'bar',
                data: orderUserTrend,
                barWidth: '60%' // 柱状宽度
            }],
            xAxis: {
                type: 'category',
                data: orderUserTrend,
                show: false
            },
            yAxis: {
                show: false
            },
            grid: {
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            }
        }
    }

    const footer = (
        <>
            <span>退货率 </span>
            <span className="emphasis">{returnRate}</span>
        </>
    )

    return (
        <CommonCard
            title="今日交易用户数"
            value={orderUser}
            footer={footer}
        >
            <ReactECharts option={getOptions()} />
        </CommonCard>
    );
}

export default TodayUsers;
