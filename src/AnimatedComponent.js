// AnimatedComponent.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedComponent = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={props}>
      <div>
        {/* Your component content goes here */}
        <h2>Hello, I'm Animated!</h2>
        <p>This is an animated component.</p>
      </div>
    </animated.div>
  );
};

export default AnimatedComponent;
