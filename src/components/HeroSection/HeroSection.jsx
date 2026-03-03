import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Stats from '../Stats/Stats';
import carImg from '../../assets/images/car.png';
import { HERO_TEXT } from './hero.constants';
import './HeroSection.css';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef(null);
  const trackRevealedRef = useRef(null);
  const carRef = useRef(null);
  const lettersRef = useRef([]);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            setScrollProgress(self.progress);
            updateGreenTrack();
          }
        }
      });

      function updateGreenTrack() {
        const car = carRef.current;
        const trackRevealed = trackRevealedRef.current;

        if (!car || !trackRevealed) return;

        const carRect = car.getBoundingClientRect();
        const carLeftEdge = carRect.left;
        const carWidth = carRect.width;
        const viewportWidth = window.innerWidth;

        const percentOfCar = carWidth * 0.25;
        const greenEndPoint = carLeftEdge + percentOfCar;
        const revealPercent = (greenEndPoint / viewportWidth) * 100;

        trackRevealed.style.clipPath = `inset(0 ${100 - revealPercent}% 0 0)`;
      }

      tl.fromTo(carRef.current,
        {
          left: "-0%"
        },
        {
          left: "90%",
          ease: "none",
          duration: 1,
          onUpdate: updateGreenTrack
        },
        0
      );

      const totalLetters = lettersRef.current.length;
      lettersRef.current.forEach((letter, index) => {
        if (letter) {
          const startProgress = index / totalLetters;
          tl.to(letter, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.1,
            ease: "back.out(1.7)"
          }, startProgress);
        }
      });

      updateGreenTrack();

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const welcomeLetters = HERO_TEXT.WELCOME_WORD.split('');
  const brandLetters = HERO_TEXT.BRAND_WORD.split('');

  let letterIndex = 0;

  return (
    <section ref={containerRef} className="hero-container">

      <Stats scrollProgress={scrollProgress} />

      <div className="track-system">

        <div className="track-base"></div>
        <div ref={trackRevealedRef} className="track-revealed"></div>

        <div className="letters-container">

          <div className="word-group">
            {welcomeLetters.map((letter, index) => (
              <span
                key={`welcome-${index}`}
                ref={el => lettersRef.current[letterIndex++] = el}
                className="letter"
              >
                {letter}
              </span>
            ))}
          </div>

          <div className="word-group">
            {brandLetters.map((letter, index) => (
              <span
                key={`brand-${index}`}
                ref={el => lettersRef.current[letterIndex++] = el}
                className="letter"
              >
                {letter}
              </span>
            ))}
          </div>

        </div>

      </div>

      <img
        ref={carRef}
        src={carImg}
        alt="Car"
        className="car"
      />

    </section>
  );
};

export default HeroSection;