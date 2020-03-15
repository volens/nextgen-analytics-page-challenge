import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DashboardInfoItem from './common/DashboardInfoItem'

class DashboardInfo extends Component {


    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg w-100">
                    <div className="container-fluid w-100">
            
                            <ul className="nav navbar-nav main-nav w-100">
                                <DashboardInfoItem isActive={true} title={"Signups"}/>
                                <DashboardInfoItem isActive={false} title={"Investments"}/>
                                <DashboardInfoItem isActive={false} title={"Revenue"}/>
                                <DashboardInfoItem isActive={false} title={"Exits"}/>
                                <DashboardInfoItem isActive={false} title={"Trades"}/>                  
                            </ul>
                      
                    </div>
                </nav>
            </div>

        )
    }
}
DashboardInfo.propTypes = {

}

export default DashboardInfo