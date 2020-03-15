import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardView from './Cardview'
import { areaChart, pieChart } from '../styles'
import types from '../../utils/types'
import { dataFeeder } from '../../utils'




class DashboardContent extends Component {

    render() {
        const fakeData = dataFeeder(1000)

        return (
            <div className="row">
                <div className="col-6"><CardView type={types.area} data={fakeData} styles={areaChart} /></div>
                <div className="col-6">
                    <CardView type={types.pie} data={fakeData} styles={pieChart} />
                    <CardView type={types.selection} data={fakeData} styles={pieChart} />
                    <CardView type={types.latest} data={fakeData} styles={pieChart} />
                </div>
            </div>
        )
    }
}
DashboardContent.propTypes = {

}

export default DashboardContent