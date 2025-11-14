import React from 'react';
import './about_us.css';


const AboutUS = () => {
  return (
    <>
    <div className="aboutText">
     <div className="headerContainer">
      <h1>What is Hack Holyoke?</h1>
      </div>

      <div className="textContainer">
        <p>
            HackHolyoke is a 24-hour hackathon hosted every year by students at Mount Holyoke College, one of the first
            historically women's colleges in the US. Initiated in 2014, we have strived to be an inclusive hackathon that
            unites young innovators from a variety of backgrounds. 
            With over 80% of HackHolyoke attendees identifying as women and/or first-time hackers, our hackathon aims to 
            represent what we hope the tech industry will look like.
        </p>
        <p>
            (HackHolyoke 2025 will take place on November 15-16th, 2025 fully in-person tea breaks, information sessions, 
            and workshops.)
        </p>

      </div>
      </div>
     
    </>
  );
};

export default AboutUS;
