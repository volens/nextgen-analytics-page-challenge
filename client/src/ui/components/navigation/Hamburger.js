import React from 'react'
import classnames from 'classnames'


//render two-layered data
const  Hamburger =({top, bottom, styles})=> {
    
    return (
        <div className="container">
            <div className={classnames("row" , styles.top )}>{top} </div>
            <div className={classnames("row text-center d-block" , styles.bottom )}> {bottom} </div>
        </div>
    )
}

export default Hamburger
