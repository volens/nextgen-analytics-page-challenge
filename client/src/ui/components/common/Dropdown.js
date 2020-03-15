import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class Dropdown extends Component {

    render() {
        const {data} = this.props
        return (<>
   <a className="dropdown-toggle nav-link dashboard-info-item" data-toggle="dropdown" aria-expanded="false" href="#">{data.title} </a>
            <div className="dropdown-menu" role="menu"> {data.options.map((e,i)=> <a key={i} className="dropdown-item" role="presentation" href={e.path}>{e.option}</a>)}</div>
    </>
        )
    }

}
Dropdown.propTypes ={

}

export default Dropdown