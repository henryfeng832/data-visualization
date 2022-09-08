import './index.less'
import { Row, Col, Card } from 'antd'
import TotalSales from "./TotalSales";
import TotalOrders from "./TotalOrders";
import TodayUsers from "./TodayUsers";
import TotalUsers from "./TotalUsers";

function TopView() {
    return (
        <div className="top-view">
            <Row gutter={20}>
                <Col span={6}>
                    <Card hoverable >
                        <TotalSales />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card hoverable >
                        <TotalOrders />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card hoverable >
                        <TodayUsers />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card hoverable >
                        <TotalUsers />
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default TopView;
