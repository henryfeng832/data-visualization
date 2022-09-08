import './index.less'
import {Card, DatePicker, Radio} from "antd";
import locale from 'antd/es/date-picker/locale/zh_CN';
import {useState} from "react";
import ReactECharts from "echarts-for-react";

function SalesView() {
    const [radioGroupVale, setRadioGroupVale] = useState('1');
    const [rankData, setRankData] = useState([
        {
            "no": 1,
            "name": "肯德基",
            "money": "323,234"
        },
        {
            "no": 2,
            "name": "麦当劳",
            "money": "299,132"
        },
        {
            "no": 3,
            "name": "肯德基",
            "money": "283,998"
        },
        {
            "no": 4,
            "name": "海底捞",
            "money": "266,223"
        },
        {
            "no": 5,
            "name": "西贝筱面村",
            "money": "223,445"
        },
        {
            "no": 6,
            "name": "汉堡王",
            "money": "219,663"
        },
        {
            "no": 7,
            "name": "真功夫",
            "money": "200,997"
        }
    ]);

    const tabList = [
        {key: '1', tab: '销售额'},
        {key: '2', tab: '访问量'}
    ]

    const options = [
        {label: '今日', value: '1'},
        {label: '本周', value: '2'},
        {label: '本月', value: '3'},
        {label: '今年', value: '4'},
    ];

    // TODO hover item event
    const getOptions = () => {
        return {
            title: {
                text: '年度销售额',
                textStyle: {
                    fontSize: 12,
                    color: '#666'
                },
                left: 25,
                top: 20
            },
            xAxis: {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
                type: 'bar',
                barWidth: '35%',
                data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290],
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
                    <ReactECharts option={getOptions()} style={{width: '70%'}}/>
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
