import React from 'react'

import "../css/InstructorSection.css"
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../assets/Images/Instructor.png";

import HighLightText from './HighLightText';

import Btn from './Btn';

const InstructorSection = () => {
    return (


        <div >


            <div className='instructormaindiv '>


                <div className='instructormaindivInsideOne'>


                    <img src={Instructor} className='instructormaindivInsideOneImg' alt="" />
                </div>


                <div className='instructormaindivInsideTwo' >


                    <h1 className='instructormaindivInsideTwoHead'>

                        Become an
                        <HighLightText text={"instructor"} />
                    </h1>


                    <p className=" instructor-text">
                        Instructors from around the world teach millions of students on
                        StudyNotion. We provide the tools and skills to teach what you
                        love.
                    </p>


                    <div className='instructorBtnDiv'>

                        <Btn active={true}>
                            Start Teaching Today
                            <FaArrowRight />
                        </Btn>
                    </div>

                </div>


            </div>



        </div>
    )
}

export default InstructorSection