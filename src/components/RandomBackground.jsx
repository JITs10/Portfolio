import React, { useState, useEffect } from 'react';

const RandomBackground = () => {
  const backgrounds = [
    'radial-gradient(125% 125% at 50% 10%, #000 40%, #8b0000 100%)',
'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)',
'radial-gradient(125% 125% at 50% 10%, #000 40%, #4B0082 100%)',
 'radial-gradient(125% 125% at 50% 10%, #000 40%, #FF8C00 100%)'
  ];

  const [background, setBackground] = useState('');

  useEffect(() => {
    // Randomly select a background from the array
    if (backgrounds.length > 0) {
      const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
      setBackground(randomBackground);
    }
  }, []);  // Empty dependency ensures this only runs once when the component mounts

  const appStyle = {
    background: background,
    position: 'absolute',
    inset: '0',
    zIndex: -10,  // Ensure it's behind the other content
    height: '100vh',
    width: '100%',
  };

  return <div style={appStyle}></div>;
};

export default RandomBackground;
