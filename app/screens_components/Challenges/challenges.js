'use client'
import React from "react";
import Image from "next/image";
import ChallengeCarousel from "../../components/ChallengeCarousel/ChallengeCarousel.js";
import { ChallengeCard } from "../../components/ChallengeCard/challengeCard.js";
import useEmblaCarousel from 'embla-carousel-react'
import beg from '../../assets/challenges/beg.png'
import world from '../../assets/challenges/world.png'
import ent from '../../assets/challenges/ent.png'
import './challengeScreen.css'

const challengeCards = [
    <ChallengeCard 
    pic={beg} 
    description={"This challenge is designed to be accessible and enjoyable for those new to hackathons. It focuses on creating platforms that allow beginners to explore and create projects about topics they are passionate about."}
    />,
    <ChallengeCard 
    pic={world} 
    description={"Participants are challenged to develop projects that aim to improve any issues that are prevalent in the current world. Your solution can address health, societal concerts, political tensions, or even innovative ways to encourage wellness. The key is to create something that helps individuals be more informed about real world issues."}
    />,
    <ChallengeCard 
    pic={ent} 
    description={"Participants will work together in teams to create a game that demonstrates innovation in one or more aspects. Your game can be for any platform and can belong to any genre. The key is to leverage your creativity and technical skills to build a game that offers a fresh and engaging experience."}
    />
  ];

const ChallengeScreen =() =>{
    return(
        <div >
            <h1 className="challenge-heading">Challenges</h1>
            <ChallengeCarousel slides={challengeCards} options={{ loop: true }} />
        </div>
    
    );
}

export default ChallengeScreen;