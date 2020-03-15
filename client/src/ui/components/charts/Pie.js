import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';
import { colors } from '../../styles';
import { transform } from '../../../utils';

const renderActiveShape = (props) => {
    const {
      cx, cy, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload
    } = props;
  
    return (
      <g>
        <text x={cx} y={cy} dy={10} textAnchor="middle" fill={fill} fontSize={30}>{payload.value}</text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };
export default class MyPie extends PureComponent {
    state = {
        activeIndex: 0,
      };
    
      onPieEnter = (data, index) => {
          
        this.setState({
          activeIndex: index,
        });
      };

  render() {
      const {data} = this.props


    return (
 
        <PieChart width={250} height={250}>

<Pie
  activeIndex={this.state.activeIndex}
  activeShape={renderActiveShape}
  data={data}

  innerRadius={70}
  outerRadius={80}
  paddingAngle={5}
  dataKey="value"
  onMouseEnter={this.onPieEnter}
>  
  {
    colors.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color}  />)
  }
</Pie>
</PieChart>
     
    );
  }
}
