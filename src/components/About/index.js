import React, { useEffect,useRef } from 'react'
import './about.css'

//React Icons
import { FaAngleDown } from "react-icons/fa";

//Gsap Animation
import {TimelineLite ,TweenMax, Power3,gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

//AOS
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';


//Image and assets
import friends from '../../images/AboutPage/friends.jpg'
import AppleMusic from '../../images/AboutPage/apple-music.svg'
import Maps from '../../images/AboutPage/maps.svg'
import afterHours from '../../images/AboutPage/cover5.png'
import AboutImg from '../../images/AboutPage/AboutImg.png'
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
    let sections = useRef(null);
    
    let scrollRef = useRef(null);
    let heading = useRef(null);
    let rightImage = useRef(null);
    let bottomText = useRef(null);
    let tl = new TimelineLite();
    useEffect(()=>{
      const blob = rightImage.children[0];
      const blobImage = blob.nextSibling;
      
      const headlineFirst = heading.children[0].children[0];
      const headlineSecond = headlineFirst.nextSibling;
      const contentP = heading.children[1];
      tl.from([headlineFirst.children,headlineSecond.children ], 1.5, {
        y: 100,
        ease: "power4.out",
        stagger: {
          amount: 0.3
        }
        
      },'Start').from(contentP,1.8 ,{ y: 20, opacity: 0, ease: Power3.easeOut}, .6

      )

      //blob Animation
      tl.from(blob,1.8,{x: 680, ease: Power3.easeOut,opacity:0},'Start')
      .from(blobImage,1.8,{ ease: "power4.out",opacity:0},1)
     
      .to(blob,40,{ 
        rotation: 360, 
        duration:40,
        transformOrigin: "50% 50%",
        yoyo:true,
  repeat: -1})


    },AOS.init({duration:1200}))
    return (
        <div ref = {el =>scrollRef = el} >

          {/* ABOUT_HERO_SECTION */}
        <div className = "About-container">
            <div className = "hero-bg"></div>
            <div className = "About-wrapper">
                <div className = "AboutText-container" ref={el => heading  = el} >
                    <h1>
                        <div className = "About-content-line">
                            <div className  = "about-h1"> Let's get to know</div>
                        </div>
                        
                        <div className = "About-content-line">
                            <div className  = "about-h1"> YOU a little</div>
                        </div>
                    </h1>
                    <p className = "about-p">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo 
                    </p>
                </div>
                <div className = "right-container">
                    <div className = "img-Holder" ref = {el => rightImage = el }>
                      <div className = "blob"><svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="739.513" height="748.592" viewBox="0 0 739.513 748.592">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#5e84fc"/>
      <stop offset="1" stop-color="#c26efd"/>
    </linearGradient>
  </defs>
  <g id="Group_2380" data-name="Group 2380" transform="translate(-948 -103.853)">
    <path id="blob" d="M626.142,503.209Q504.865,640.766,353.471,628.556T134.519,491Q66.962,365.652,116.612,209.375T338.82,66.934Q511.376,80.771,629.4,223.212T626.142,503.209Z" transform="translate(946.349 121.261)" fill="#c26efd" opacity="0.59"/>
    <path id="blob-2" data-name="blob" d="M497.828,410.414q-113.8,129.07-255.849,117.614T36.537,398.958q-63.389-117.614-16.8-264.25T228.233,1.056q161.91,12.983,272.651,146.636T497.828,410.414Z" transform="translate(1687.513 376.288) rotate(121)" fill="url(#linear-gradient)"/>
  </g>
</svg>

</div>   
                      <div className = "img-div">
<img src = {AboutImg}/>
</div>
                    </div>

                </div>

            </div>

           

        </div>
        
        {/* TIMELINE SECTION */}
        <div className = "timeline-container">
          <div className = "timeline-header"> 
              <h2 className = "timeline-header-title">Mustafa Kemal Atatürk</h2>
              <h3 className = "timeline-header-subtitle">FATHER OF THE TURKS</h3>
          </div>
          <div className = "timeline">
            <div className = "timeline-item" data-text = "FATHE OF THE TURKS">
              <div className = "timeline-content">
                <img className = "timeline-img"  src = "http://gazetemanifesto.com/wp-content/uploads/2015/11/mustafa-kemal.jpg"/>
                <h2 className = "timeline-content-title">1881</h2>
                <p className = "timeline-content-desc">He was born in 1881 (probably in the spring) in Salonica, then an Ottoman city, now inGreece. His father Ali Riza, a customs official turned lumber merchant, died when Mustafawas still a boy. His mother Zubeyde, adevout and strong-willed woman, raised him and his sister.</p>

              </div>

            </div>
            <div className = "timeline-item" data-text = "FATHE OF THE TURKS">
              <div className = "timeline-content">
                <img className = "timeline-img"  src = "http://gazetemanifesto.com/wp-content/uploads/2015/11/mustafa-kemal.jpg"/>
                <h2 className = "timeline-content-title">1881</h2>
                <p className = "timeline-content-desc">He was born in 1881 (probably in the spring) in Salonica, then an Ottoman city, now inGreece. His father Ali Riza, a customs official turned lumber merchant, died when Mustafawas still a boy. His mother Zubeyde, adevout and strong-willed woman, raised him and his sister.</p>

              </div>

            </div>
            <div className = "timeline-item" data-text = "FATHE OF THE TURKS">
              <div className = "timeline-content">
                <img className = "timeline-img"  src = "http://gazetemanifesto.com/wp-content/uploads/2015/11/mustafa-kemal.jpg"/>
                <h2 className = "timeline-content-title">1881</h2>
                <p className = "timeline-content-desc">He was born in 1881 (probably in the spring) in Salonica, then an Ottoman city, now inGreece. His father Ali Riza, a customs official turned lumber merchant, died when Mustafawas still a boy. His mother Zubeyde, adevout and strong-willed woman, raised him and his sister.</p>

              </div>

            </div>
            <div className = "timeline-item" data-text = "FATHE OF THE TURKS">
              <div className = "timeline-content">
                <img className = "timeline-img"  src = "http://gazetemanifesto.com/wp-content/uploads/2015/11/mustafa-kemal.jpg"/>
                <h2 className = "timeline-content-title">1881</h2>
                <p className = "timeline-content-desc">He was born in 1881 (probably in the spring) in Salonica, then an Ottoman city, now inGreece. His father Ali Riza, a customs official turned lumber merchant, died when Mustafawas still a boy. His mother Zubeyde, adevout and strong-willed woman, raised him and his sister.</p>

              </div>

            </div>
          </div>


        </div>

        {/* TIMELINE SECTION END */}
        

        {/* MOVIE-SONG-LOCATION SECTION */}

        <div className="panel" ref = {el => sections = el}> 
                <h1 className = "sectionHeading" data-aos="fade-down" >What makes you, You</h1>
                <div className = "sectionDivider" data-aos="fade-down" data-aos-delay = "50"></div>
                <p className = "sectionQuote" data-aos="fade-down" data-aos-delay = "100">Here's a list of thing that you Love/Like</p>

                {/* Movie Section */}

            <section className="panel-movies" ref = {el => sections = el} >
                <div className = "info-holder">
                    <div data-aos="fade-right"  ><svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="70" height="70" viewBox="0 0 106 106">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_52" data-name="Rectangle 52" width="72" height="72" transform="translate(124.432 4005.432)" fill="#fff" stroke="#707070" stroke-width="1"/>
    </clipPath>
  </defs>
  <g id="Group_2381" data-name="Group 2381" transform="translate(-101 -3781)">
    <rect id="Rectangle_51" data-name="Rectangle 51" width="106" height="106" rx="23" transform="translate(101 3781)" fill="#171717"/>
    <g id="Mask_Group_6" data-name="Mask Group 6" transform="translate(-6.432 -207.432)" clip-path="url(#clip-path)">
      <g id="netflix" transform="translate(140.7 4005)">
        <path id="Path_34" data-name="Path 34" d="M26.551,40.862l-.03,15.361c0,14.6-.03,15.422-.182,15.422-.546,0-5.161.3-6.709.455-1,.091-3.036.3-4.493.486-1.488.182-2.7.3-2.732.273,0-.03-.03-16.424-.03-36.46V0ZM51.809.03H37.753l-.03,16.12V32.328l14.056,40.5c.061-.03.061-16.454.061-36.46Z" transform="translate(-12.374)" fill="#ad080f"/>
        <path id="Path_35" data-name="Path 35" d="M51.779,72.829h-.121c-.243,0-.729-.03-1.305-.091-3.248-.395-7.529-.789-10.99-.941-1.123-.061-2.064-.121-2.095-.121,0,0-.88-2.55-2.55-7.316-1.609-4.645-3.977-11.445-7.043-20.279l-1.123-3.218L12.374,0H26.491L27.1,1.73l2.672,7.681Z" transform="translate(-12.374)" fill="#df0d12"/>
      </g>
    </g>
  </g>
</svg>
</div>
                    <p data-aos="fade-right" data-aos-delay = "50" className = "info-name">Movies/Shows You love?</p>
                </div>
                <div className = "content-holder">
                    <div className = "about-card-wrapper">
                        <div className = "card" data-aos="fade-up"  ><img src = {friends}></img></div>
                        <div className = "card" data-aos="fade-up" data-aos-delay = "50"><img src = {friends}></img></div>
                        <div className = "card" data-aos="fade-up" data-aos-delay = "100"><img src = {friends}></img></div>
                        <div className = "card" data-aos="fade-up" data-aos-delay = "150"><img src = {friends}></img></div>
                        <div className = "card"data-aos="fade-up"><img src = {friends}></img></div>
                    </div>
                </div>
            </section>
            <section className="panel-songs"  ref = {el => sections = el}>
                <div className = "info-holder">
                        <div data-aos="fade-right" className = "iconImg"><img src = {AppleMusic}></img></div>
                        <p data-aos="fade-right" data-aos-delay = "50" className = "info-name">Songs that lift you up</p>
                </div>
                <div className = "content-holder">
                    <div className = "song-card-wrapper">
                        <div className = "card-song"  >
                            <div className = "coverContainer"><img src ={afterHours}></img></div>
                            <p className = "songname">After Hours</p>
                            <p className = "artist-name">The Weeknd</p>

                        </div>
                        <div className = "card-song" >
                            <div className = "coverContainer"><img src ={afterHours}></img></div>
                            <p className = "songname">After Hours</p>
                            <p className = "artist-name">The Weeknd</p>

                        </div>
                        <div className = "card-song" >
                            <div className = "coverContainer"><img src ={afterHours}></img></div>
                            <p className = "songname">After Hours</p>
                            <p className = "artist-name">The Weeknd</p>

                        </div>
                        <div className = "card-song" >
                            <div className = "coverContainer"><img src ={afterHours}></img></div>
                            <p className = "songname">After Hours</p>
                            <p className = "artist-name">The Weeknd</p>

                        </div>
                        <div className = "card-song" >
                            <div className = "coverContainer"><img src ={afterHours}></img></div>
                            <p className = "songname">After Hours</p>
                            <p className = "artist-name">The Weeknd</p>

                        </div>
                      
                    </div>
                </div>
            </section>

               {/* Song Section */}
               
            <section className="panel-location" ref = {el => sections = el}>
            <div className = "info-holder">
                        <div className = "iconImg"><img className = "maps" src = {Maps}></img></div>
                        <div>
                        <p className = "info-name">Place you wanna go to</p>
                        <p className = "info-name">or been to</p>
                        </div>
                </div>
            </section>
          
            </div>
        </div>
    )
}

export default AboutPage

