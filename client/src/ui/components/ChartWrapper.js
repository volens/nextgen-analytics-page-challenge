import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Pie from './charts/Pie'
import Area from './charts/Area'
import { ResponsiveContainer } from 'recharts';
import { transform } from '../../utils';
import CardView from './Cardview';
import CardRow from './common/CardRow';

class ChartWrapper extends Component {

    getChart(type, data, styles) {
        switch (type) {
            case "area":
                return <Area data={data} styles={styles} />;
            case "pie":
                return this.wrapPieChart(data, styles)
            default:
                return <div />

        }
    }
    wrapPieChart(data, styles) {
        const transformed = transform(data, undefined, false)

        return (
            <div className="d-block">
                <div className="row">
                    <div className="col-md-4">
                        <Pie data={transformed} styles={styles} />
                    </div>
                    <div className="col-md-8">
                        <div className="container">
                            <h3 className="text-center mt-5 dashboard-info-item">Total signups</h3></div>
                        <div className="row"><div className="col-lg-11 text-center">
                            {transformed.map(e => (
                                <CardRow key={e.type} type={e.type} left={e.type === 0 ? "Individuals" : "Companies"} right={e.value} />
                            ))}
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { type, styles, data } = this.props
        const chart = this.getChart(type, data, styles)

        return <ResponsiveContainer width='100%' aspect={4.0 / 3.0}>{chart ?? chart}</ResponsiveContainer>
    }
}
ChartWrapper.propTypes = {
    type: PropTypes.string.isRequired
}

export default ChartWrapper