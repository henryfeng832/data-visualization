import {useContext, useEffect} from "react";
import {AjaxContext} from "../App";

function format(v) {
    const reg = /\d{1,3}(?=(\d{3})+$)/g
    return `${v}`.replace(reg, '$&,')
}

function wrapperObject(o, k) {
    if (o && k.indexOf('.') >= 0) {
        const keys = k.split('.')
        keys.forEach(key => {
            o = o[key]
        })
        return o
    } else {
        return o && o[k] ? o[k] : {}
    }
}

function wrapperArray(o, k) {
    return o && o[k] ? o[k] : []
}

function wrapperMoney(o, k) {
    return o && o[k] ? `¥ ${format(o[k])}` : '¥ 0.00'
}

function wrapperOriginalNumber(o, k) {
    return o && o[k] ? o[k] : 0
}

function wrapperNumber(o, k) {
    return o && o[k] ? format(o[k]) : 0
}

function wrapperPercentage(o, k) {
    return o && o[k] ? `${o[k]}%` : '0%'
}

function useComputeData() {
    // console.log('useData', "111")
    const {reportData, wordCloud, mapData} = useContext(AjaxContext)

    return {
        reportData: reportData,
        salesToday: wrapperMoney(reportData, 'salesToday'),
        salesGrowthLastDay: wrapperPercentage(reportData, 'salesGrowthLastDay'),
        salesGrowthLastMonth: wrapperPercentage(reportData, 'salesGrowthLastMonth'),
        salesLastDay: wrapperMoney(reportData, 'salesLastDay'),
        orderToday: wrapperNumber(reportData, 'orderToday'),
        orderLastDay: wrapperNumber(reportData, 'orderLastDay'),
        orderTrend: wrapperArray(reportData, 'orderTrend'),
        orderUser: wrapperNumber(reportData, 'orderUser'),
        returnRate: wrapperPercentage(reportData, 'returnRate'),
        orderUserTrend: wrapperArray(reportData, 'orderUserTrend'),
        orderUserTrendAxis: wrapperArray(reportData, 'orderUserTrendAxis'),
        userToday: wrapperNumber(reportData, 'userToday'),
        userTodayNumber: wrapperOriginalNumber(reportData, 'userToday'),
        userLastMonth: wrapperOriginalNumber(reportData, 'userLastMonth'),
        userGrowthLastDay: wrapperNumber(reportData, 'userGrowthLastDay'),
        userGrowthLastMonth: wrapperNumber(reportData, 'userGrowthLastMonth'),
        orderFullYear: wrapperArray(reportData, 'orderFullYear'),
        orderFullYearAxis: wrapperArray(reportData, 'orderFullYearAxis'),
        orderRank: wrapperArray(reportData, 'orderRank'),
        userFullYear: wrapperArray(reportData, 'userFullYear'),
        userFullYearAxis: wrapperArray(reportData, 'userFullYearAxis'),
        userRank: wrapperArray(reportData, 'userRank'),
        wordCloud: wordCloud,
        category1: wrapperObject(reportData, 'category.data1'),
        category2: wrapperObject(reportData, 'category.data2'),
        mapData: mapData,
        format: format
    }
}

export default useComputeData;
