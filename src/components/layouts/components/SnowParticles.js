import React from 'react';
import Snowfall from 'react-snowfall';

const SnowParticles = () => {
  return (
    <div className="h-full">
      <Snowfall
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      />
    </div>
  );
};

export default SnowParticles;
