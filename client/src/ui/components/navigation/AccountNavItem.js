import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DateTime from './Hamburger'
import DashboardInfoItem from '../common/DashboardInfoItem'
import { datetime } from '../../styles'

 class AccountNavItem extends Component {


    render() {
        return (
            <ul className="nav navbar-nav mx-auto">
             <li className="nav-item"><img className="account-logo rounded-circle img-thumbnail" src={this.props.avatar}/></li>
                 <DashboardInfoItem isActive={false} isLight={true} title={this.props.name}/>
             <li className="nav-item p-2 text-center dashboard-info-item"><DateTime bottom={moment().format("MMM Do")} top={moment().format("h:mm:ss a")} styles={datetime}/></li>
           </ul>
        )
    }
}
AccountNavItem.propTypes ={

}

export default AccountNavItem