import React, { useEffect, useRef, useState } from 'react'
import "./UsPage.css"
import { TextWrapper,TextOne,ImageWrapper, BoldText,USHero, 
  UsWrapper,ImageHolder,BackGround,Image } from './UsPageElements'

//Locomotive Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
//Gsap
import {TimelineLite ,TweenMax, Power3,gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

//Images
import img from '../../images/UsPage/UsOne.jpg'

const UsPage = () => {
    const[click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const rotationTween = useRef(null);
    const rotationTweenTwo = useRef(null);
    let imgBg = useRef(null);
    let image = useRef(null);
    let ImgWrapper = useRef(null);
    let TextHero = useRef(null);
    const scrollRef = useRef();
    const tl = new TimelineLite();
    console.log(click);

   
    useEffect(() => {
        rotationTween.current = gsap
          .to(image,1,{y:0,ease:Power3.easeIn,opacity:1,visibility:'visible'})

          
          
        return () => {
          rotationTween.current.kill();
        };
      }, []);

      useEffect(() => {
        rotationTween.current.reversed(!click);
      }, [click]);

      //Second Object
      useEffect(() => {
      
        rotationTweenTwo.current = gsap
          .fromTo(imgBg,1,{y:-300,ease:Power3.easeIn,opacity:0},{
            y:0,
            opacity: 0.2
          })          
        return () => {
          rotationTweenTwo.current.kill();
        };
      }, AOS.init({duration:1200}));

      useEffect(() => {
        rotationTweenTwo.current.reversed(!click);
      }, [click]);

     
    return (
        <div className = {`background ${click ? "background--on " : "background"}`} >
            <USHero  >
                <UsWrapper >
                    <TextWrapper  >
                        <TextOne   active = {click}>I met you in the <BoldText active = {click} >Dark</BoldText></TextOne>
                        <TextOne   active = {click}><BoldText active = {click}>You</BoldText> lit me up</TextOne> 
                        <div   className={`toggle-body ${click ? "toggle-body--on " : "toggle-body"}`} onClick ={handleClick}>
                        <div    className={`toggle-btn ${click ? "toggle-btn--on" : "toggle-btn"}`}></div>
                         </div>
                    </TextWrapper>
                    <ImageWrapper className = "ImageWrapper" ref = {el=> ImgWrapper =el}   >
                         <ImageHolder className = "Image-Holder">
                             <BackGround  classname = "imgBgCard" ref = {el => imgBg = el } ></BackGround>
                             <div className = "ImageCheck" ref={el=>image=el }  ></div>
                         </ImageHolder>
                    </ImageWrapper>
                </UsWrapper>
           

            </USHero>
            <div   className={`section-two ${click ? "section-two--on " : "section-two"}`}>
              <p className  = "section-pOne" data-aos="fade-up">You made me feel as though</p>
              <p className  = "section-pOne" data-aos="fade-up">I was <p className = "sectionBoldText">ENOUGH</p></p>
              <div className = "section-photo-wrapper">
                <div className = "section-photo" data-aos="fade-right">

                </div>
                <div className = "section-photo" data-aos="fade-up">
                
                </div>
                <div className = "section-photo"data-aos="fade-left">
                
                </div>
              </div>
            </div>

            <div  className = "section-quote" data-aos="fade-in">
            <blockquote className="quote">
   
            We danced the night away <br/>
            We drank too much <br/>
            I held your hair back when  <br/>
            You were throwing up


              </blockquote>

            </div>

            <div  className={`section-two ${click ? "section-two--on " : "section-two"}`}>
              <p className  = "section-pOne">Then you <p className = "sectionBoldText"> SMILED </p> over your shoulder</p>
              <p className  = "section-pTwo">For a minute I was stone-cold sober</p>
              <div className = "section-photo-wrapper">
                <div className = "section-photo">

                </div>
                <div className = "section-photo">
                
                </div>
                <div className = "section-photo">
                
                </div>
              </div>
            </div>

        </div>
    )
}

export default UsPage
