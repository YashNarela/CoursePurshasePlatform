import React from 'react'

import Logo1 from "../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../assets/TimeLineLogo/Logo4.svg";
import TimeLineImage from "../assets/Images/TimelineImage.png";
const TimeLine = [
    {
        Logo: Logo1,
        Heading: "Leadership",
        Description: "Fully committed to the success company",
    },
    {
        Logo: Logo2,
        Heading: "Responsibility",
        Description: "Students will always be our top priority",
    },
    {
        Logo: Logo3,
        Heading: "Flexibility",
        Description: "The ability to switch is an important skills",
    },
    {
        Logo: Logo4,
        Heading: "Solve the problem",
        Description: "Code your way to a solution",
    },
];


const TimeLineSection = () => {
    return (
        <>


            <div className='timeLineBox'>


                <div className='timelineInsideBox1' >

                    {
                        TimeLine.map((ele, i) => {

                            return (



                                <>


                                    <div className="timelinesectionsdiv" key={i}>
                                        <div className="timelinesection" key={i}>
                                            <div className="logo-container">
                                                <img src={ele.Logo} alt="" />
                                            </div>
                                            <div>
                                                <h2 className="heading">{ele.Heading}</h2>
                                                <p className="description">{ele.Description}</p>
                                            </div>
                                        </div>
                                        <div className={`timeline-line `}></div>
                                    </div>



                                </>
                            )


                        })
                    }


                </div>


                <div className="timelineInsideBox2">
                    <div className="timeline-content">
                        {/* Section 1 */}
                        <div className="timeline-section border-right">
                            <h1 className="number">10</h1>
                            <h1 className="description">Years experiences</h1>
                        </div>

                        {/* Section 2 */}
                        <div className="timeline-section">
                            <h1 className="number">250</h1>
                            <h1 className="descriptionOfCourse">types of courses</h1>
                        </div>
                    </div>
                    <img src={TimeLineImage} alt="timelineImage" className="timeline-image" />
                </div>



            </div>


        </>
    )
}

export default TimeLineSection