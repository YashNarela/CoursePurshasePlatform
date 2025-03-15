import React from 'react'
import { Link } from 'react-router'

const Btn = ({ children, active, linkto }) => {
    return (
        <>


            <Link to={linkto} >
                <button className='btnChild' style={{ backgroundColor: active ? "yellow" :"#161D29" , color:active?"black" :"white"}} >{children}</button>

            </Link>
        </>
    )
}

export default Btn