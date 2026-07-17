import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
  // Fade in sections on scroll
  gsap.utils.toArray('.fade-in-section').forEach((section) => {
    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
      }
    );
  });

  // Parallax effect for images
  gsap.utils.toArray('.parallax-img').forEach((img) => {
    gsap.to(img, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: img,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  });

  // Stagger animation for cards
  gsap.utils.toArray('.stagger-cards').forEach((container) => {
    const cards = container.querySelectorAll('.card-item');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: container,
          start: 'top 75%',
        },
      }
    );
  });
};

export const animateBookOpening = () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.scroll-story-container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      pin: false,
    },
  });

  // Book opening animation stages
  timeline
    .to('.book-left-page', { rotateY: -25, duration: 1 })
    .to('.book-right-page', { rotateY: 25, duration: 1 }, '<')
    .to('.book-content', { opacity: 1, duration: 0.5 });

  return timeline;
};

export const heroParallax = () => {
  gsap.to('.hero-background', {
    yPercent: 50,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });
};

export const textRevealAnimation = (element) => {
  const chars = element.textContent.split('');
  element.innerHTML = chars
    .map((char) => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('');

  gsap.fromTo(
    element.querySelectorAll('.char'),
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.05,
      stagger: 0.03,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
      },
    }
  );
};
