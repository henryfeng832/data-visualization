import './index.less'
import {Card, DatePicker, Radio} from "antd";
import locale from 'antd/es/date-picker/locale/zh_CN';
import {useEffect, useState} from "react";
import ReactECharts from "echarts-for-react";
import useComputeData from "../../hooks/useComputeData";
import {AjaxContext} from "../../App";

const tabList = [
    {key: '1', tab: '销售额'},
    {key: '2', tab: '访问量'}
]

const options = [
    {label: '今日', value: '今日'},
    {label: '本周', value: '本周'},
    {label: '本月', value: '本月'},
    {label: '今年', value: '今年'},
];

function SalesView() {
    const {orderRank, userRank, orderFullYear, orderFullYearAxis, userFullYear, userFullYearAxis} = useComputeData(AjaxContext);
    const [activeIndex, setActiveIndex] = useState('1')
    const [radioGroupVale, setRadioGroupVale] = useState('今日');
    const rankData = activeIndex === '1' ? orderRank : userRank;
    const [gridOptions, setGridOptions] = useState({})

    useEffect(() => {
        if (activeIndex === '1') {
            setGridOptions(getOptions(orderFullYear, orderFullYearAxis, '年度销售额'))
        } else {
            setGridOptions(getOptions(userFullYear, userFullYearAxis, '年度用户访问量'))
        }
    }, [activeIndex, orderFullYear, userFullYear])

    // TODO hover item event
    const getOptions = (data, axis, title) => {
        return {
            title: {
                text: title,
                textStyle: {
                    fontSize: 12,
                    color: '#666'
                },
                left: 25,
                top: 20
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: {
                type: 'category',
                data: axis,
                axisTick: {
                    alignWithLabel: true,
                    lineStyle: {
                        color: '#999'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#999'
                    }
                },
                axisLabel: {
                    color: '#333'
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        type: 'dotted',
                        color: '#eee'
                    }
                }
            },
            series: [{
                name: 'sales',
                type: 'bar',
                barWidth: '35%',
                data: data,
            }],
            color: ['#3398DB'],
            grid: {
                top: 70,
                left: 60,
                right: 60,
                bottom: 50
            }
        }
    }

    const onTabChange = (key) => {
        console.log("onTabChange", key)
        setActiveIndex(key)
    }

    const onRangePickerChange = (date, dateString) => {
        console.log("onRangePickerChange", date, dateString)
    }

    const onRadioGroupChange = ({target: {value}}) => {
        console.log("onRadioGroupChange", value)
        setRadioGroupVale(value)
    }

    const tabBarExtraContent = (
        <>
            <Radio.Group
                options={options}
                onChange={onRadioGroupChange}
                value={radioGroupVale}
                optionType="button"
                buttonStyle="solid"
            />
            <DatePicker.RangePicker
                locale={locale}
                onChange={onRangePickerChange}
                style={{marginLeft: '20px'}}
            />
        </>
    )


    return (
        <div className="sales-view">
            <Card
                hoverable
                tabList={tabList}
                tabBarExtraContent={tabBarExtraContent}
                onTabChange={onTabChange}
            >
                <div className="sales-view-chart-wrapper">
                    {/* 图标 */}
                    <ReactECharts option={gridOptions} style={{width: '70%'}}/>
                    {/* 排行榜 */}
                    <div className="sales-view-list">
                        <div className="sales-view-title">排行榜</div>
                        <div className="list-item-wrapper">
                            {rankData.map((item, index) => (
                                <div className="list-item" key={item.no}>
                                    <div className={`list-item-no ${+item.no <= 3 ? 'top-no' : ''}`}>{item.no}</div>
                                    <div className="list-item-name">{item.name}</div>
                                    <div className="list-item-money">{item.money}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default SalesView;
