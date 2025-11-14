'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import '../../styles/teamPage.css';
import MenuBar from '../components/Menu/menuBar';
import SideMenu from '../components/SideMenu/sideMenu';
import LogisticsCarousel from '../components/LogisticCarousel/LogisticsCarousel';
import { MemberCards,CoChairCards } from '../components/MemberCard/memberCard';

import coChair from '../assets/team/CO-CHAIR.png'
import felicia from '../assets/team_pics/felicia_nemoto_pace.PNG'

import logistic from '../assets/team/logistic.png'
import linh from '../assets/team_pics/linh_nguyen.jpeg'
import linda from '../assets/team_pics/linda_hu.jpg'

import sponsor from '../assets/team/sponsor.png'
import jaein from '../assets/team_pics/jaein_han.JPG'

import design from '../assets/team/design.png'
import yiting from '../assets/team_pics/yiting_chu.jpeg'

import mkt from '../assets/team/mkt.png'
import cristina from '../assets/team_pics/cristina_lopez_mendoza.jpeg'

import finance from '../assets/team/finance.png'
import belle from '../assets/team_pics/belle_song.jpg'

import web from '../assets/team/web.png'
import annette from '../assets/team_pics/annette_darpoh.jpeg'
import jennifer from '../assets/team_pics/Jennifer Liu.JPG'

const TeamPage = () => {
    const logisticCards = [
        <MemberCards
        frontCard={logistic} mbrPic={linh}
        name={"Ling Nguyen"} pronouns={"she/her"} year={"2028"}
        major ={"Data Science & Economics"}
        answer ={"I'm most excited about the community that shall be built among the hackers and seeing all the great innovations that are developed! "}
        />,
        <MemberCards
        frontCard={logistic} mbrPic={linda}
        name={"Linda Hu"} pronouns={"she/they"} year={"2028"}
        major ={"Computer Science"}
        answer ={"I'm excited to witness everyone’s awesome ideas and see what kind of amazing projects people come up with!"}
        />,
      ];
      const [isMobileView, setIsMobileView] = useState(false);

      useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 910px)');
        const handleMediaQueryChange = (event) => {
          setIsMobileView(event.matches);
        };
    
        // Set initial value
        setIsMobileView(mediaQuery.matches);
    
        // Listen for media query changes
        mediaQuery.addEventListener('change', handleMediaQueryChange);
    
        return () => {
          mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
      }, []);
    return(
        <div>
            <div className='teambg-assets'>
            <div> 
                <MenuBar/>
            </div>

            <div>
                <SideMenu/>
            </div>
    
            
            
            <h1 className='team_header'>Meet the Team</h1>
            <div id='co-chairs' className='team-container'>
                
                {/* <h1 className='heading'>Co-chairs</h1> */}
                
                
                <MemberCards frontCard={coChair} mbrPic={felicia} 
                name={"Felicia Nemoto-Pace"}
                pronouns={"they/them"} year ={"2027"}
                major ={"Computer Science, Critical Race/Political Economy"}
                answer={"I'm thrilled to be a part of the groundbreaking work we do at HackHolyoke to foster new generations of conscientious, diverse, and critical programmers!"}/>
               
            </div>

            <div id='logistics' className='team-container'>
                {/* <h1 className='heading'>Logistics</h1> */}
                {/* <LogisticsCarousel slides={logisticCards} options={{ loop: false }} /> */}
                {isMobileView ? (
                        <div className="stacked-cards">
                            {logisticCards.map((card, index) => (
                                <div key={index} className="card">
                                    {card}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <LogisticsCarousel slides={logisticCards} options={{ loop: false }} />
                    )}
            </div>

            <div id='sponsorship' className='team-container'>
                {/* <h1 className='heading'>Sponsorship</h1> */}

                <MemberCards frontCard={sponsor} mbrPic={jaein}
                name={"Jaein Han"}
                pronouns={"she/her"} year ={"2028"}
                major={"Computer Science"}
                answer={"The people coming! "}
                />
            </div>

            <div id='webmaster' className='team-container'>
                {/* <h1 className='heading'>Webmaster</h1> */}
                <MemberCards frontCard={web} mbrPic={jennifer}
                name={"Jennifer Liu"}
                pronouns={"she/her"} year ={"2028"}
                major={"Computer Science"}
                answer={"I am most excited to see how creative people can be through the projects they will be hacking soon!"}
                />

                <MemberCards frontCard={web} mbrPic={annette}
                name={"Annette Darpoh"}
                pronouns={"she/her"} year ={"2027"}
                major={"Computer Science & French"}
                answer={"I'm excited to meet new people and see the amazing projects that participants come up with!"}
                />
            </div>

            <div id='finance' className='team-container'>
                {/* <h1 className='heading'>Finance</h1> */}
                <MemberCards frontCard={finance} mbrPic={belle}
                name={"Belle Song"}
                pronouns={"she/her"} year ={"2028"}
                major={"Data Science"}
                answer={"I'm excited to see the creativity and collaboration that our HackHolyoke 2025 participants will showcase throughout the event."}
                />
            </div>

            <div id='marketing' className='team-container'>
                {/* <h1 className='heading'>Marketing</h1> */}
                <MemberCards frontCard={mkt} mbrPic={cristina}
                name={"Cristina Lopez Mendoza"}
                pronouns={"she/her"} year ={"2027"}
                major={"Computer Science"}
                answer={"I'm most excited to bring back HackHolyoke after its 2023 hiatus, and see everyone's great projects!"}
                />
            </div>

            <div id='design' className='team-container'>
                {/* <h1 className='heading'>Design</h1> */}
                <MemberCards frontCard={design} mbrPic={yiting}
                name={"Yiting Chu"}
                pronouns={"she/her"} year ={"2028"}
                major={"Mathematics"}
                answer={"I‘m most excited about the collaborative spirit of the event—coming together with like-minded individuals to work towards a common goal, creating projects that have the potential to make a real-world impact."}
                />
            </div>

        
            </div>
        </div>


    );

};
export default TeamPage;
