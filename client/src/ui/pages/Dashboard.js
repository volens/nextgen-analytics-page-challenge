import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DashboardInfo from '../components/DashbordInfo'
import SideNavigation from '../components/navigation/SideNavigation'
import DashboardContent from '../components/DashboardContent'

class Dashboard extends Component {

    render() {
        return (
            <div className="container">
                <DashboardInfo />
                <div className="row">
                    <div className="col-lg-1">
                        <SideNavigation />
                    </div>
                    <div className="col-lg-11">
                        <DashboardContent />
                    </div>
                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {

}
export default Dashboard