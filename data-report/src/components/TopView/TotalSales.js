import {useState} from "react";

import CommonCard from "./CommonCard";
import './TotalSales.less';

function TotalSales() {
    const [salesToday, setSalesToday] = useState('¥ 30,683,473')
    const [salesGrowthLastDay, setSalesGrowthLastDay] = useState('2.28%');
    const [salesGrowthLastMonth, setSalesGrowthLastMonth] = useState('32.26%');
    const [salesLastDay, setSalesLastDay] = useState('¥ 30,000,000');

    const footer = (
        <>
            <span>昨日销售额 </span>
            <span className="emphasis">{salesLastDay}</span>
        </>
    )

    return (
        <CommonCard
            title="累计销售额"
            value={salesToday}
            footer={footer}
            className="top-sales"
        >
            <div className="compare-wrapper">
                <div className="compare">
                    <span>日同比</span>
                    <span className="emphasis">{salesGrowthLastDay}</span>
                    <div className="increase"/>
                </div>
                <div className="compare">
                    <span>月同比</span>
                    <span className="emphasis">{salesGrowthLastMonth}</span>
                    <div className="decrease"/>
                </div>
            </div>
        </CommonCard>
    );
}

export default TotalSales;
