import React from 'react'
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";
import "../css/CourseCard.css"
const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
    return (

        <div>


            <div
                className={`CourseCardMain ${currentCard === cardData?.heading ? "active" : ""}`}
                onClick={() => setCurrentCard(cardData?.heading)}
            >
                <div className="CourseCardContent">
                    <div className={`CourseCardTitle ${currentCard === cardData?.heading ? "active" : ""}`}>
                        {cardData?.heading}
                    </div>
                    <div className="CourseCardDescription">{cardData?.description}</div>
                </div>

                <div className={`CourseCardFooter ${currentCard === cardData?.heading ? "active" : ""}`}>
                    {/* Level */}
                    <div className="info">
                        <HiUsers />
                        <p>{cardData?.level}</p>
                    </div>

                    {/* Flow Chart */}
                    <div className="info">
                        <ImTree />
                        <p>{cardData?.lessionNumber} Lession</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CourseCard