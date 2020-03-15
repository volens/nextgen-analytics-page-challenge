import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class NavIcon extends Component {


    render() {
        const {icon}= this.props
        return <img className="h-15" src={icon}/> 
    }
}
NavIcon.propTypes ={

}

export default NavIcon