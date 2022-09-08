import BMapScatter from "./BMapScatter";
import LiquidFill from "./LiquidFill";
import WordCloud from "./WordCloud";
import {Card} from 'antd'

import './index.less'

function MapView() {
    return (
        <div className="map-view">
            <div className="left">
                <BMapScatter />
            </div>
            <div className="right">
                <Card
                    hoverable
                    title='用户月同比增长'
                >
                    <div className="chart-wrapper">
                        <LiquidFill />
                    </div>
                </Card>
                <Card
                    hoverable
                    title='热门搜索'
                >
                    <div className="chart-wrapper">
                        <WordCloud />
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default MapView;
