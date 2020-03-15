import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dropdown from './common/Dropdown'

const gender = {
    title: "Female",
    options: [{ option: "First", path: "/first" }, { option: "Second", path: "/second" }, { option: "Third", path: "/third" }]
}
const type = {
    title: "Individuals",
    options: [{ option: "First", path: "/first" }, { option: "Second", path: "/second" }, { option: "Third", path: "/third" }]
}
class Selection extends Component {


    render() {
        const {data} = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 left-border-blue d-block p-1 m-auto text-light">
                     By Gender                  
                    </div>
                    <div className="col-lg-3 p-0">
                        <Dropdown data={gender}/>                       
                    </div>
                    <div className="col-lg-3 p-0">
                        <Dropdown data={type}/>                       
                    </div>
                    <div className="col-lg-3 p-0 d-block infonav-item-green">
                        <p className="text-center infonav-item-green m-auto">102</p>        
                    </div>
                    
                </div>
            </div>

        )
    }
}
Selection.propTypes = {
    data:PropTypes.array.isRequired
}

export default Selection