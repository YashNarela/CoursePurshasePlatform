import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import Btn from './Btn'
import { TypeAnimation } from 'react-type-animation';


const CodeBlocks = ({

  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <>



      <div className='codeBlockMainDiv' style={{ flexDirection: position }}>



        {/* sectiom-1 */}


        <div className='codeBlockMainDivSection1' >


          {heading}

          <div className='codeBlockMainDivSection1SubHeading' >
            {subheading}
          </div>


          <div className=' codeBlockMainDivSection1Btn' >
            <Btn active={ctabtn1.active} linkto={ctabtn1.link}  >


              {ctabtn1.btnText}
              <FaArrowRight />
            </Btn>



            <Btn active={ctabtn2.active} linkto={ctabtn2.link}>

              {ctabtn2.btnText}
            </Btn>
          </div>

        </div>


        {/* section-2 */}

        <div className='codeblockMainDivSection2'>

          {backgroundGradient}
          <div className='codeblockMainDivSection2Para' >
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
          </div>




          {/* codes  */}

          <div className='codeblockMainDivSection2Code'  style={{color:codeColor}}>


            <TypeAnimation
              sequence={[codeblock, 1000, ""]}
              cursor={true}
              repeat={Infinity}
              style={{
                whiteSpace: "pre-line",
                display: "block",
              }}
              omitDeletionAnimation={true}
            />

          </div>
        </div>





      </div>



    </>
  )
}

export default CodeBlocks