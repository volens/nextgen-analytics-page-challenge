import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip
} from 'recharts';
import { colors } from '../../styles';
import { transform } from '../../../utils';



const renderTooltipContent = (o) => {
  const { payload } = o;
  const total = payload.reduce((result, entry) => (result + entry.value), 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total text-light">{`${total}.0`}</p>

    </div>
  );
};


class MyArea extends PureComponent {


  render() {
    const { data } = this.props
    return (
      <>
        {colors.map((e, i) => {
          return <div key={i} className="d-block"> <h3 className="text-center dashboard-info-item">{i === 0 ? "Individuals" : "Companies"}</h3> <AreaChart
            width={450}
            height={200}
            data={transform(data, i)}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <defs>
              <linearGradient id={e.type} x1="0" x2="0" y1="1" y2="0">
                <stop offset="0%" stopColor="#0D101D" />
                <stop offset="100%" stopColor={e.color} />
              </linearGradient>

            </defs>

            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip content={renderTooltipContent} />
            <Area type="monotone" dataKey="quantity" fill={`url(#${e.type})`} />
          </AreaChart></div>
        })}

      </>
    );
  }
}
export default MyArea