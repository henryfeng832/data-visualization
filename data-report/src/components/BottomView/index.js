import "./index.less"
import {Card, Radio, Table} from "antd";
import {useEffect, useState} from "react";
import ReactECharts from "echarts-for-react";


function BottomView() {
    const [radioGroupVale, setRadioGroupVale] = useState("1");
    const [columns] = useState([
        {title: '排名', dataIndex: 'rank'},
        {title: '关键词', dataIndex: 'keyword'},
        {title: '总搜索量', dataIndex: 'count'},
        {title: '搜索用户数', dataIndex: 'users'},
        {title: '搜索占比', dataIndex: 'range'},
    ])
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        const totalData = []
        wordCloud.forEach((item, index) => {
            totalData.push({
                id: index + 1,
                rank: index + 1,
                keyword: item.word,
                count: item.count,
                users: item.user,
                range: `${((item.user / item.count) * 100).toFixed(2)}%`
            })
        })
        setTableData(totalData)
    }, [])

    const options = [
        {label: '品类', value: '1'},
        {label: '商品', value: '2'},
    ]

    const onRadioGroupChange = ({target: {value}}) => {
        console.log("onRadioGroupChange", value)
        setRadioGroupVale(value)
    }

    function getOptions() {
        const colors = ['#8d7fec', '#5085f2', '#f8726b', '#e7e702', '#78f283', '#4bc1fc']
        const data = [27, 93, 58, 91, 36, 45, 38].slice(0, 6)
        const axis = ["粉面粥店", "简餐便当", "汉堡披萨", "香锅冒菜", "小吃炸串", "地方菜系", "轻食简餐"].slice(0, 6)
        const total = data.reduce((s, i) => s + i, 0)
        const chartData = []
        data.forEach((item, index) => {
            const percent = `${(item / total * 100).toFixed(2)}%`
            chartData.push({
                legendname: axis[index],
                value: item,
                percent,
                itemStyle: {
                    color: colors[index]
                },
                name: `${axis[index]} | ${percent}`
            })
        })
        return {
            title: [{
                text: `品类分布`,
                textStyle: {
                    fontSize: 14,
                    color: '#666'
                },
                left: 20,
                top: 20
            }, {
                text: '累计订单量',
                subtext: total,
                x: '34.5%',
                y: '42.5%',
                textStyle: {
                    fontSize: 14,
                    color: '#999'
                },
                subtextStyle: {
                    fontSize: 28,
                    color: '#333'
                },
                textAlign: 'center'
            }],
            series: [{
                name: '品类分布',
                type: 'pie',
                data: chartData,
                label: {
                    normal: {
                        show: true,
                        position: 'outter',
                        formatter: function (params) {
                            return params.data.legendname
                        }
                    }
                },
                center: ['35%', '50%'],
                radius: ['45%', '60%'],
                labelLine: {
                    normal: {
                        length: 5,
                        length2: 3,
                        smooth: true
                    }
                },
                clockwise: false,
                itemStyle: {
                    borderWidth: 4,
                    borderColor: '#fff'
                }
            }],
            legend: {
                type: 'scroll',
                orient: 'vertical',
                height: 250,
                left: '70%',
                top: 'middle',
                textStyle: {
                    color: '#8c8c8c'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    const str = params.seriesName + '<br />' +
                        params.marker + params.data.legendname + '<br />' +
                        '数量：' + params.data.value + '<br />' +
                        '占比：' + params.data.percent + '%'
                    return str
                }
            }
        };
    }

    function createOption(key) {
        const data = []
        const axis = []
        wordCloud.forEach(item => data.push(item[key]))
        wordCloud.forEach(item => axis.push(item.word))
        return {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: axis
            },
            yAxis: {
                show: false
            },
            tooltip: {},
            series: [{
                type: 'line',
                data,
                areaStyle: {
                    color: 'rgba(95,187,255,.5)'
                },
                lineStyle: {
                    color: 'rgb(95,187,255)'
                },
                itemStyle: {
                    opacity: 0
                },
                smooth: true
            }],
            grid: {
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            }
        }
    }

    function getUserOptions() {
        return {};
    }

    function getNumberOptions() {
        return {};
    }

    return (
        <div className="bottom-view">
            <div className="view">
                <Card hoverable title="关键词搜索">
                    <div className="chart-wrapper">
                        <div className="chart-inner">
                            <div className="chart">
                                <div className="chart-title">搜索用户数</div>
                                <div className="chart-data">106,142</div>
                                <ReactECharts option={createOption('user')} style={{height: '50px'}}/>
                            </div>
                            <div className="chart">
                                <div className="chart-title">搜索量</div>
                                <div className="chart-data">187,699</div>
                                <ReactECharts option={createOption('count')} style={{height: '50px'}}/>
                            </div>
                        </div>
                        <div className="table-wrapper">
                            <Table
                                rowKey={record => record.id}
                                size="middle"
                                pagination={{pageSize: 4, size: "default"}}
                                columns={columns}
                                dataSource={tableData}
                            />
                        </div>
                    </div>
                </Card>
            </div>
            <div className="view">
                <Card
                    hoverable
                    title="分类销售排行"
                    extra={
                        <Radio.Group
                            options={options}
                            onChange={onRadioGroupChange}
                            value={radioGroupVale}
                            optionType="button"
                            buttonStyle="solid"
                        />
                    }
                >
                    <div className="chart-wrapper">
                        <ReactECharts option={getOptions()} style={{height: '100%'}}/>
                    </div>
                </Card>
            </div>
        </div>
    );
}

const wordCloud = [
    {
        "word": "北京",
        "count": 6658,
        "user": 2058
    },
    {
        "word": "上海",
        "count": 9415,
        "user": 2180
    },
    {
        "word": "广州",
        "count": 6625,
        "user": 2534
    },
    {
        "word": "深圳",
        "count": 4619,
        "user": 3032
    },
    {
        "word": "南京",
        "count": 5665,
        "user": 4476
    },
    {
        "word": "杭州",
        "count": 7442,
        "user": 4957
    },
    {
        "word": "合肥",
        "count": 1157,
        "user": 194
    },
    {
        "word": "济南",
        "count": 9666,
        "user": 9434
    },
    {
        "word": "太原",
        "count": 4003,
        "user": 2694
    },
    {
        "word": "成都",
        "count": 3209,
        "user": 3182
    },
    {
        "word": "重庆",
        "count": 6341,
        "user": 2613
    },
    {
        "word": "苏州",
        "count": 105,
        "user": 73
    },
    {
        "word": "无锡",
        "count": 4189,
        "user": 2863
    },
    {
        "word": "常州",
        "count": 1309,
        "user": 1191
    },
    {
        "word": "温州",
        "count": 3663,
        "user": 2734
    },
    {
        "word": "哈尔滨",
        "count": 418,
        "user": 9
    },
    {
        "word": "长春",
        "count": 4353,
        "user": 847
    },
    {
        "word": "大连",
        "count": 1151,
        "user": 564
    },
    {
        "word": "沈阳",
        "count": 7636,
        "user": 5876
    },
    {
        "word": "拉萨",
        "count": 4482,
        "user": 1483
    },
    {
        "word": "呼和浩特",
        "count": 2201,
        "user": 975
    },
    {
        "word": "武汉",
        "count": 1501,
        "user": 563
    },
    {
        "word": "南宁",
        "count": 1958,
        "user": 989
    },
    {
        "word": "必胜客",
        "count": 9227,
        "user": 6274
    },
    {
        "word": "肯德基",
        "count": 9611,
        "user": 7439
    },
    {
        "word": "麦当劳",
        "count": 736,
        "user": 631
    },
    {
        "word": "海底捞",
        "count": 4890,
        "user": 1557
    },
    {
        "word": "美食",
        "count": 1013,
        "user": 380
    },
    {
        "word": "商超",
        "count": 4152,
        "user": 3823
    },
    {
        "word": "水果",
        "count": 1479,
        "user": 1475
    },
    {
        "word": "跑腿",
        "count": 4676,
        "user": 2522
    },
    {
        "word": "送药",
        "count": 6322,
        "user": 2482
    },
    {
        "word": "烩饭",
        "count": 7993,
        "user": 2254
    },
    {
        "word": "面条",
        "count": 6311,
        "user": 5733
    },
    {
        "word": "小龙虾",
        "count": 4639,
        "user": 767
    },
    {
        "word": "牛肉",
        "count": 4232,
        "user": 3886
    },
    {
        "word": "鸡腿",
        "count": 6777,
        "user": 1499
    },
    {
        "word": "全家桶",
        "count": 3081,
        "user": 917
    },
    {
        "word": "麦乐鸡",
        "count": 3724,
        "user": 3292
    },
    {
        "word": "炭烤",
        "count": 1541,
        "user": 506
    },
    {
        "word": "麻辣",
        "count": 42,
        "user": 34
    },
    {
        "word": "冒菜",
        "count": 9487,
        "user": 5150
    }
]

export default BottomView;
