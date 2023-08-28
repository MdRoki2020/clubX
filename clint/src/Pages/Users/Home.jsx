import React, { Fragment, useEffect, useRef, useState } from 'react'
import Footer from './Footer'
import '../../Assets/css/Home.css'
import {Button, } from 'react-bootstrap';




function Home() {

    //for banner slider
    const [showBtnAndCover, setShowBtnAndCover] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        if (!isHovered) {
          setShowBtnAndCover((prevShow) => !prevShow);
        }
      }, 5000);

      return () => clearInterval(interval);
    }, [isHovered]);

    
    


  return (
    <Fragment>
      <section>
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6" 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                >

                  <div className='coverWrapper'>
                      <div className={`btnAndCoverWrapper ${showBtnAndCover ? 'fade-in' : 'fade-out'}`}>
                          <div className='text-center animated fadeInUp'>
                            <h2 className="textContentWrapper">Meet People With Shared Interests</h2>
                            <p className="coverText">DIU Clubs are a safe space they turn to for guidance and support, a place that nurtures their interests and provides them with various opportunities to explore their passions, build invaluable skills</p>
                            <Button className="textBannerButton shadow btn text-light">Learn More</Button>
                          </div>
                      </div>

                    <div className={`introContains ${showBtnAndCover ? 'fade-out' : 'fade-in'}`}>
                      <div className=' text-center animated fadeInUp'>
                        <div className='row'>
                        <div className='col-md-1'></div>
                        <div className='col-md-10'>
                            <h2>DIU clubs are the self-proclaimed best places on campus</h2>
                        </div>
                        <div className='col-md-1'></div>
                        </div>
                      </div>               
                    </div>
                  </div>

                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
      </section>

      <Footer/>
    </Fragment>
  )
}

export default Home
