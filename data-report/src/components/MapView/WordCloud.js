import {useState, useEffect} from "react";
import ReactECharts from "echarts-for-react";
import 'echarts-wordcloud'

function WordCloud() {
    const data = worldCloudData.map(item => ({
        name: item.word,
        value: item.count,
        // textStyle: {
        //     color: ['rgba(97,216,0,.7)', 'rgba(204,178,26,.7)', 'rgba(245,166,35,.7)', 'rgba(156,13,113,.7)'][Math.floor(Math.random() * 4)]
        // }
    }))

    function getOptions() {
        return {
            series: [{
                type: 'wordCloud',
                data: data,

            }]
        }
    }

    return <ReactECharts option={getOptions()} style={{height: '100%'}}/>
}

export default WordCloud

const worldCloudData = [
    {
        "word": "北京",
        "count": 2652,
        "user": 688
    },
    {
        "word": "上海",
        "count": 1610,
        "user": 86
    },
    {
        "word": "广州",
        "count": 4321,
        "user": 3220
    },
    {
        "word": "深圳",
        "count": 3369,
        "user": 682
    },
    {
        "word": "南京",
        "count": 3486,
        "user": 1219
    },
    {
        "word": "杭州",
        "count": 1181,
        "user": 844
    },
    {
        "word": "合肥",
        "count": 9174,
        "user": 7448
    },
    {
        "word": "济南",
        "count": 3960,
        "user": 1779
    },
    {
        "word": "太原",
        "count": 5946,
        "user": 288
    },
    {
        "word": "成都",
        "count": 8645,
        "user": 5651
    },
    {
        "word": "重庆",
        "count": 8701,
        "user": 2277
    },
    {
        "word": "苏州",
        "count": 860,
        "user": 157
    },
    {
        "word": "无锡",
        "count": 3044,
        "user": 665
    },
    {
        "word": "常州",
        "count": 4339,
        "user": 2258
    },
    {
        "word": "温州",
        "count": 2568,
        "user": 219
    },
    {
        "word": "哈尔滨",
        "count": 9600,
        "user": 3226
    },
    {
        "word": "长春",
        "count": 4934,
        "user": 1235
    },
    {
        "word": "大连",
        "count": 2030,
        "user": 1181
    },
    {
        "word": "沈阳",
        "count": 7031,
        "user": 278
    },
    {
        "word": "拉萨",
        "count": 1648,
        "user": 580
    },
    {
        "word": "呼和浩特",
        "count": 9163,
        "user": 113
    },
    {
        "word": "武汉",
        "count": 2498,
        "user": 2381
    },
    {
        "word": "南宁",
        "count": 1475,
        "user": 1206
    },
    {
        "word": "必胜客",
        "count": 5053,
        "user": 315
    },
    {
        "word": "肯德基",
        "count": 4380,
        "user": 2757
    },
    {
        "word": "麦当劳",
        "count": 1787,
        "user": 841
    },
    {
        "word": "海底捞",
        "count": 311,
        "user": 296
    },
    {
        "word": "美食",
        "count": 1458,
        "user": 1310
    },
    {
        "word": "商超",
        "count": 5138,
        "user": 505
    },
    {
        "word": "水果",
        "count": 1127,
        "user": 121
    },
    {
        "word": "跑腿",
        "count": 3518,
        "user": 402
    },
    {
        "word": "送药",
        "count": 3237,
        "user": 2770
    },
    {
        "word": "烩饭",
        "count": 386,
        "user": 106
    },
    {
        "word": "面条",
        "count": 2427,
        "user": 1798
    },
    {
        "word": "小龙虾",
        "count": 2044,
        "user": 1467
    },
    {
        "word": "牛肉",
        "count": 7962,
        "user": 5545
    },
    {
        "word": "鸡腿",
        "count": 2478,
        "user": 1805
    },
    {
        "word": "全家桶",
        "count": 3884,
        "user": 1886
    },
    {
        "word": "麦乐鸡",
        "count": 3976,
        "user": 3521
    },
    {
        "word": "炭烤",
        "count": 5447,
        "user": 3582
    },
    {
        "word": "麻辣",
        "count": 117,
        "user": 8
    },
    {
        "word": "冒菜",
        "count": 6542,
        "user": 91
    }
]
