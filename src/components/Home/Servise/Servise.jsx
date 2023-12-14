import React from 'react';
import './Servise.css'
import computerImage from '../../../assets/images/agancy.png'

const Servise = () => {
    return (
        <div className='boxes'>
            <div className='dives'>
                <div className='div-mini'>
                    
                <img src={computerImage} alt="" />
                    
                    <h1>Web Development</h1>
                    <p>My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else</p>
                </div>
                <div className='div-mini'>
                    <h1>Digital Marketing</h1>
                    <p>My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else</p>
                </div>
            </div>
            <div className='dives'>
                <div className='divose'>
                    <h1>We’re always ready <br /> for <span> challenges</span></h1>
                </div>
                <div className='div-mini'>
                    <h1>Web Development</h1>
                    <p>My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else</p>
                </div>
                <div className='div-mini'>
                    <h1>Digital Marketing</h1>
                    <p>My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else</p>
                </div>
            </div>

        </div>
    );
};

export default Servise;