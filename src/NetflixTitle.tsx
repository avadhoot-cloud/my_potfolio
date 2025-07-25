import React, { useEffect, useRef, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import logoImage from '../src/images/logo-transparent.webp'; // Use transparent logo for animation

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const hasPlayedRef = useRef(false);
  const navigate = useNavigate();

  // Play sound and animation only once
  const triggerAnimation = () => {
    if (hasPlayedRef.current) return;
    hasPlayedRef.current = true;
    const audio = new Audio(netflixSound);
    audio.play().catch(error => console.error("Audio play error:", error));
    setIsClicked(true);
  };

  useEffect(() => {
    // Listen for scroll to trigger animation
    const handleScroll = () => {
      triggerAnimation();
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 2500); // Shorter for smoother experience
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={triggerAnimation}>
      <img 
        src={logoImage} 
        alt="Custom Logo" 
        className={`netflix-logo ${isClicked ? 'animate' : ''}`} 
      />
    </div>
  );
};

export default NetflixTitle;
