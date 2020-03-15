import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class DashboardInfoItem extends Component {


    render() {
        return (
            <li className="nav-item p-2 text-center" >
                <a className={classnames("nav-link dashboard-info-item", { 'active': this.props.isActive, "text-uppercase": this.props.isUpper, "text-light": this.props.isLight })}
                    id="home" href="#">{this.props.title} </a>
            </li>
        )
    }
}
DashboardInfoItem.propTypes = {

}

export default DashboardInfoItem