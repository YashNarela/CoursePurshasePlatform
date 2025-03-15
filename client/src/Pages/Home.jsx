import React from 'react'
import { Link } from 'react-router'
import { FaArrowRight } from "react-icons/fa"
import HighLightText from './HighLightText'
import Btn from './Btn'
import vid from "../assets/Images/banner.mp4"
import CodeBlocks from './CodeBlocks'
import TimeLineSection from './TimeLineSection'
import LearningLanguageSection from './LearningLanguageSection'
import InstructorSection from './InstructorSection'
import ExploreMore from './ExploreMore'
const Home = () => {
  return (
    <div className='homyMainOuter' >




      <div className='homyMainDiv' >

        <Link className='Link' to='/signup'>
          <div className='homeInstructorBtn' >
            <p>Become an Instructor</p>
            <FaArrowRight className='Arrow' />
          </div>
        </Link>


        {/* Heading */}




        <div className='Empower'>

          Empower Your Future with
          <HighLightText text={" Coding Skills"} />

        </div>

        <div className='upperText' >

          With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
        </div>



        <div className='mainBtnBox' >

          <Btn active={false} linkto={"s"}>
            Learn More

          </Btn>
          <Btn active={"yellow"} linkto={"s"}>
            lick Me

          </Btn>


        </div>

        <div className='homeVideoDiv' >

          <video className='videoTag' muted autoPlay loop src={vid}></video>
        </div>



        <div>
          <CodeBlocks

            position={"row"}
            heading={
              <div className="codeBlockHeading">
                Unlock your
                <HighLightText text={"coding potential"} /> with our online
                courses.
              </div>
            }

            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}


            codeColor={"#FFE83D"}

            backgroundGradient={<div className="codeblock2 absolute"></div>}

            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
          />
        </div>
        <div>
          <CodeBlocks

            position={"row-reverse"}
            heading={
              <div className="codeBlockHeading">
                Unlock your
                <HighLightText text={"coding potential"} /> with our online
                courses.
              </div>
            }

            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}


            codeColor={"#FFE83D"}

            backgroundGradient={<div className="codeblock2 absolute"></div>}

            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
          />
        </div>



 
      <ExploreMore/>
        

      </div>




      {/* section-2 */}


      <div className='homyDivSection2' >



        <div className='homePageBg '>



          <div className='homePageBgInnerDiv' >


            <div className='homePageBgInnerDivBtn' >

              <Btn active={true} linkto={'signup'} >
                Explore Full Catalog
                <FaArrowRight />

              </Btn>


              <Btn active={false}  >

                Learn More
              </Btn>
            </div>

          </div>

        </div>




        <div className='homyPageSection2Part2'>


          <div className='homyPageSection2Part2One' >

            Get the skills you need for a

            <HighLightText text={"job in demand"} />





          </div>


          <div className=' homyPageSection2Part2Two ' >

            <div className='homyPageSection2Part2TwoInside' >
              The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.

            </div>

            <Btn active={true}>

              Learn More
            </Btn>


          </div>


        </div>




        <TimeLineSection />

        <LearningLanguageSection />

      </div>




      {/* section 3 */}


      <div className='section3Instruction'>


         <InstructorSection/>


         <h1 className='reviewh1'>

          Reviews from other learners

         </h1>
           
      </div>



    </div>
  )
}

export default Home
