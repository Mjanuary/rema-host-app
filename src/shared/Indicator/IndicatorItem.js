import React from 'react'
import PropTypes from 'prop-types'

const IndicatorItem = (props) => {
    const {
        indicatorId,
        indicatorName
    } = props;
    return (
        <li className="list-group-item">
            <div className="custom-control custom-radio">
                <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                value={indicatorId}
                className="custom-control-input"
                />
                <label
                className="custom-control-label"
                htmlFor="customRadio1"
                >
                {indicatorName}
                </label>
            </div>
        </li>
    )
}

IndicatorItem.propsTypes = {
    indicatorId:PropTypes.string.isRequired,
    indicatorName:PropTypes.string.isRequired,
}

IndicatorItem.defaultProps = {
    indicatorId:"",
    indicatorName:""
}

export default IndicatorItem
