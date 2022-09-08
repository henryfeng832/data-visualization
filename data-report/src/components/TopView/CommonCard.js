import './index.less'

function CommonCard(props) {
    const {title, value, children, footer} = props
    return (
        <div className="common-card">
            <div className="title">{title}</div>
            <div className="value">{value}</div>
            <div className="chart">
                {children}
            </div>
            <div className="line"/>
            <div className="total">
                {footer}
            </div>
        </div>
    );
}

export default CommonCard;
