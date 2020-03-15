import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardRow from './common/CardRow'




class Latest extends Component {


    render() {
        const {title, data} = this.props
        const transformed =data.slice(0,3)
        return (
            <div className="card-body d-block ">
                .<div className="card-body  main-bg">
                      <h5 className="card-title p-2 dashboard-info-item ">{title}</h5>
                <div className="row">
                    <div className="col-md-6 dashboard-info-item pl-3"> Name</div>
                    <div className="col-md-6 dashboard-info-item pl-3"> Sceduled Meetings</div>
                </div>
                </div>

                 <div className="card-body d-block ">
                    {transformed.map((e,i)=><CardRow key={i} type={e.type} left={e.name} right={e.date}/>)}
                 </div>

            </div>
        )
    }
}
Latest.propTypes = {
    title: PropTypes.string.isRequired,
    data:PropTypes.array.isRequired
}

export default Latest