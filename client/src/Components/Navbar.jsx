import React, { use } from 'react'
import { Link, matchPath, useLocation } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import logo from "../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from "../data/navbar-links"
import "../css/Navbar.css"
import { CiShoppingCart } from "react-icons/ci";


const TopNavbar = () => {
 
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    const { totalItems } = useSelector((state) => state.cart)
    const location = useLocation()

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
    }





    return (
        <>
            <div className='NavbarOuterDiv'   >
                <div className='NavbarContainer' >

                    <div className='NavbarContainerInnerDiv1' >


                        <Link>

                            <img src={logo} width="120px" alt="logo" loading='lazy' />
                        </Link>
                    </div>

                    <div className=" NavbarContainerInnerDiv2 ">

                        {

                            NavbarLinks.map((ele, idx) => {

                                return (

                                    ele.title === "Catalog" ? (

                                        <>

                                            <div>
                                                {ele.title}
                                            </div>

                                        </>

                                    ) : (


                                        <Link key={idx} className='NavLink' to={ele.path} >
                                            <p style={{ color: matchRoute(ele.path) ? "#E7C009" : "#F1F2FF" }}  >
                                                {ele.title}
                                            </p>
                                        </Link>
                                    )
                                )
                            })
                        }



                    </div>


                    {/* login signup  */}

                      <div className='NavbarContainerInnerDiv3'>


                      {

                       user && user?.accountType!="Instructor" &&(

                        <Link to="/dashboard/cart"  style={{position:"relative"}} >
                            
                                    <CiShoppingCart className='navbarinnerdivcarticons'   />

                                    {
                                           
                                           totalItems >0 && (
                                            <span className='navbarinnerdivspan'  >
                                                {totalItems}
                                            </span> 
                                           )
                                    }
                        
                        </Link>
                       )

                         }




                        {token === null && (
                            <Link to="/login">
                                <button className="NavbarLoginCss">
                                    Log in
                                </button>
                            </Link>
                        )}

                        {token === null && (
                            <Link to="/signup">
                                <button className="NavbarLoginCss">
                                    Sign Up
                                </button>
                            </Link>
                        )}





                        {token !== null && <ProfileDropdown />}

                      </div>



                </div>
            </div>


        </>
    )
}

export default TopNavbar
