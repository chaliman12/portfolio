// AboutMe.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const AboutMe = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.section style={props}>
      <div className="about-me">
        <h2>About Me</h2>
        <p>
          I'm a passionate web developer with a strong foundation in front-end
          technologies.
        </p>
      </div>
    </animated.section>
  );
};

export default AboutMe;
