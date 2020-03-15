import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

//render row data
class CardRow extends Component {
    render() {
        const {type, right, left}= this.props
        return <div className="row p-2 dashboard-info-item">
                 <div className="col-md-8">{left}</div>   
                <div className={classnames("col-md-4", {"right-border-pink":type === 1, "right-border-blue":type === 0})}>{right}</div>
        </div> 
    }
}
CardRow.propTypes ={
    type: PropTypes.number.isRequired
}

export default CardRow