import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dropdown from '../common/Dropdown'
import DashboardInfoItem from '../common/DashboardInfoItem'
import AccountNavItem from './AccountNavItem'
import avatar from './main.jpg'
import Hamburger from './Hamburger'
import { infonavgreen, infonavpink, infonavblue } from '../../styles'
const dropdown = {
    title: "Overview",
    options: [{ option: "First", path: "/first" }, { option: "Second", path: "/second" }, { option: "Third", path: "/third" }]
}


class Navigation extends Component {


    render() {
        return (
            <>
            <nav className="navbar navbar-expand-lg navigation-clean">
                <div className="container" >
                    <div className="row w-100  upper-nav-border-clr">
                        <div className="col-3 p-0"><img className="navbar-brand" src="assets/logo.png" /></div>
                        <div className="col-5 p-0 collapse navbar-collapse  d-flex flex-row-reverse">
                            <ul className="nav navbar-nav mx-auto">
                                <DashboardInfoItem isActive={false} isUpper={true} title={"Account"} />
                                <DashboardInfoItem isActive={false} isUpper={true} title={"Charts"} />
                                <DashboardInfoItem isActive={false} isUpper={true} title={"help"} />

                            </ul>
                        </div>
                        <div className="col-4 p-0 collapse navbar-collapse account-nav-item">  <AccountNavItem avatar={avatar} name={"Name Surname"} />
                        </div>
                    </div>
                    
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navigation-clean cart-view-bg">
                <div className="container" >
                    <div className="row w-100">              
                            <div className="col-lg-12 collapse navbar-collapse">
                                <ul className="nav navbar-nav mx-auto ">
                                  
                                    <li className="nav-item p-2 text-center dropdown">  <Dropdown data={dropdown} /> </li>
                                    <li className="nav-item px-5 text-center dashboard-info-item" role="presentation"> <Hamburger bottom={648} top={"Total signups"} styles={infonavgreen}/></li>
                                    <li className="nav-item px-3 text-center dashboard-info-item" role="presentation"> <Hamburger bottom={12} top={"Last week"} styles={infonavpink}/></li>
                        
                                    <li className="nav-item px-3 text-center dashboard-info-item" role="presentation"> <Hamburger bottom={102} top={"Total investments"} styles={infonavblue}/></li>
                        
                                    <li className="nav-item px-3 text-center dashboard-info-item" role="presentation"> <Hamburger bottom={"NOK 345,565"} top={"Average investments"} styles={infonavgreen}/></li>
                                    <li className="nav-item px-3 text-center dashboard-info-item" role="presentation"> <Hamburger bottom={23} top={"Total exits"} styles={infonavpink}/></li>


                                </ul>
                     
                        </div>
                    </div>
                </div>
            </nav>
            </>
        )
    }
}
Navigation.propTypes = {

}

export default Navigation