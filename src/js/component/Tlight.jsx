import React, { useState } from 'react';

const Tlight = () => {
  const [activeLight, setActiveLight] = useState(null);

  const handleLightClick = (color) => {
    setActiveLight(color);
  };

  return (
    <div className="box">
    <div id="traffic-light" className="container">
      <div
        className={`light red ${activeLight === 'red' ? 'active' : ''}`}
        onClick={() => handleLightClick('red')}
      ></div>
      <div
        className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
        onClick={() => handleLightClick('yellow')}
      ></div>
      <div
        className={`light green ${activeLight === 'green' ? 'active' : ''}`}
        onClick={() => handleLightClick('green')}
      ></div>
    </div>
    </div>
  );
};

export default Tlight;