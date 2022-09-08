import CommonCard from "./CommonCard";
import {useState} from "react";
import ReactECharts from "echarts-for-react";
import './TotalUsers.less'

function TotalUsers() {
    const [userToday, setuserToday] = useState('2,359,297');
    const [userGrowthLastDay, setuserGrowthLastDay] = useState('135.87%');
    const [userGrowthLastMonth, setuserGrowthLastMonth] = useState('194.84%');
    const [userLastMonth, setuserLastMonth] = useState(800000);
    const [userTodayNumber, setuserTodayNumber] = useState(2359297);

    const getOptions = () => {
        return {
            grid: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            xAxis: {
                type: 'value', // 数值轴
                show: false
            },
            yAxis: {
                type: 'category', // 类目轴
                show: false
            },
            series: [{
                name: '上月平台用户数',
                type: 'bar',
                stack: '总量', // 数据堆叠
                data: [userLastMonth],
                barWidth: 10, // 柱状宽度
                itemStyle: {
                    color: '#45c946'
                }
            }, {
                name: '今日平台用户数',
                type: 'bar',
                stack: '总量', // 数据堆叠
                data: [userTodayNumber],
                itemStyle: {
                    color: '#eee'
                }
            }, {
                type: 'custom', // 自定义渲染
                stack: '总量', // 数据堆叠
                data: [userLastMonth],
                renderItem: (params, api) => { // 开发者自己提供图形渲染的逻辑
                    // params包含了当前数据信息和坐标系的信息
                    // api是一些开发者可调用的方法集合
                    console.log(params, api)
                    const value = api.value(0) // 取出 dataItem 中的数值
                    const endPoint = api.coord([value, 0]) // 进行坐标转换计算

                    return {
                        type: 'group',
                        position: endPoint, // 坐标计算结果
                        children: [{
                            type: 'path', // 可使用 SVG PathData 做路径
                            shape: { // 绘制图形
                                d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z',
                                x: -5,
                                y: -20,
                                width: 10,
                                height: 10,
                                layout: 'cover'
                            },
                            style: {
                                fill: '#45c946' // 覆盖颜色
                            }
                        }, {
                            type: 'path',
                            shape: {  // 绘制图形
                                d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                                x: -5,
                                y: 10,
                                width: 10,
                                height: 10,
                                layout: 'cover'
                            },
                            style: {
                                fill: '#45c946' // 覆盖颜色
                            }
                        }]
                    }
                }
            }]
        }
    }

    const footer = (
        <>
            <div className="total-users-footer">
                <span>日同比</span>
                <span className="emphasis">{userGrowthLastDay}</span>
                <div className="increase"/>
                <span className="month">月同比</span>
                <span className="emphasis">{userGrowthLastMonth}</span>
                <div className="decrease"/>
            </div>
        </>
    )

    return (
        <CommonCard
            title="累计用户数"
            value={userToday}
            footer={footer}
        >
            <ReactECharts option={getOptions()} />
        </CommonCard>
    );
}

export default TotalUsers;
