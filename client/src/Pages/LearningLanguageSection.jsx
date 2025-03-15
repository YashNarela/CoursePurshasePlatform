import React from 'react'
import "../css/LearningLang.css"

import HighLightText from './HighLightText';
import Know_your_progress from "../assets/Images/Know_your_progress.png";
import Compare_with_others from "../assets/Images/Compare_with_others.svg";
import Plan_your_lessons from "../assets/Images/Plan_your_lessons.svg";

import Btn from './Btn';
const LearningLanguageSection = () => {
    return (
        <div>



            <div className="learninglanguagediv">
                Your swiss knife for
                <HighLightText text={"learning any language"} />
                <div className="learning-description">
                    Using spin making learning multiple languages easy. With 20+ languages, realistic voice-over, progress tracking, custom schedule, and more.
                </div>
                <div className="learning-images">
                    <img src={Know_your_progress} alt="" className="image-progress" />
                    <img src={Compare_with_others} alt="" className="image-compare" />
                    <img src={Plan_your_lessons} alt="" className="image-plan" />
                </div>
            </div>


              <div className='learningBtns'>

                <Btn active={true} linkto={"/signup"}>

                    <div>Learn More</div>
                </Btn>
              </div>

        </div>
    )
}

export default LearningLanguageSection