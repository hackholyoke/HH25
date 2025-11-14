import React from "react";
import './homeScreen.css'
import Image from 'next/image';
import HH24_logo from '../../assets/HH24_logo.png';
import {RegisterButton, TeamButton,LearnMoreButton, JoinDiscordButton} from '../../components/buttons/HomeButtons';

const HomeScreen = () =>{
    return(
       <div>
        <Image src={HH24_logo} alt = "HackHolyoke logo" width={250} height={250} layout='responsive' className='image'/>


        <p className='welcome'>Welcome To</p>
        <h1 className='heading_shadow'>HACKHOLYOKE 2025</h1>
        <h1 className='heading'>HACKHOLYOKE 2025!</h1>
        <p className='desc'>November 15-16 | Great Room, Blanchard Hall, South Hadley, MA </p>
        <div className='buttonLayout'>
                <RegisterButton/>
                <TeamButton/>
                <LearnMoreButton/>
                <JoinDiscordButton/>
            </div>
       </div> 

    );
}

export default HomeScreen;