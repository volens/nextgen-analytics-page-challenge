import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavIcon from '../common/NavIcon'



 class SideNavigation extends Component {


    render() {
        return (
            <div className="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a className="nav-link " id="v-pills-home-tab"  href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><NavIcon icon={"/assets/icons/group.svg"}/></a>
            <a className="nav-link" id="v-pills-profile-tab" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><NavIcon icon={"/assets/icons/funds.svg"}/></a>
            <a className="nav-link" id="v-pills-messages-tab" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><NavIcon icon={"/assets/icons/path.svg"}/></a>
            <a className="nav-link" id="v-pills-settings-tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><NavIcon icon={"/assets/icons/history.svg"}/></a>
            <a className="nav-link" id="v-pills-settings-tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><NavIcon icon={"/assets/icons/window.svg"}/></a>
            <a className="nav-link" id="v-pills-settings-tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><NavIcon icon={"/assets/icons/lock.svg"}/></a>
          </div>
        )
    }
}
SideNavigation.propTypes ={

}

export default SideNavigation