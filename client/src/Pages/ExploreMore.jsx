import React, { useState } from "react";

import HighLightText from './HighLightText';
import { HomePageExplore } from "../data/homepage-explore";
import CourseCard from "./CourseCard";
import "../css/ExploreMore.css"

const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];


const ExploreMore = () => {

    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);



    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    };

    return (
        <div>


            <div className="ExploreMainHeading">
                Unlock the
                <HighLightText text={" Power of Code"} />
            </div>

            <p className="ExploreMainPara">
                Learn to Build Anything You Can Imagine
            </p>

            <div className=" ExploreMainTabOuter" >

                {
                    tabsName.map((element, index) => {

                        return (

                            <div key={index}  onClick={ ()=> setMyCards(element)}  className="   ExploreMainTab" style={{ backgroundColor: currentTab === element ? "#000814" : "", color: currentTab === element ? "#F1F2FF" : "#999DAA" }} >

                                  {element}

                            </div>
                        )

                    })
                }

            </div>

           
            <div className="hidden-div"></div>

           

           {/* coursse card */}
           <div className="courseCardDivMain">
            

              {

                courses.map((ele, index) => {

                   return (


                       <CourseCard
                           key={index}
                           cardData={ele}
                           currentCard={currentCard}
                           setCurrentCard={setCurrentCard}
                       />

                   )

                })
              }

 
           </div>




        </div>
    )
}

export default ExploreMore