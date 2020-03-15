import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChartWrapper from './ChartWrapper'
import { ResponsiveContainer } from 'recharts'
import types from '../../utils/types'
import Selection from './Selection'
import Latest from './Latest'

class CardView extends Component {

    getContent(type, data, styles){
        if(type === types.pie || type === types.area )
        return <ChartWrapper type={type} data={data} styles={styles} />
        if(type ===types.selection)
        return <Selection data={data}/>
        if(type ===types.latest)
        return <Latest data={data}  title={"Latest Signups"}/>
    }

    render() {
        const { data, type, styles } = this.props
        return (
            <div className="cart-view-bg card m-3 mx-auto">    
                 {this.getContent(type, data, styles)}

            </div>
        )
    }
}
CardView.propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    styles: PropTypes.object.isRequired,
}

export default CardView