import React from 'react';

const Logo = () => {
  return (
    <>
      <button type="button" href="#" className="mr-2 inline-block md:hidden">
        <img
          src="/assets/images/fb-logo.png"
          alt="Facebook logo"
          className="w-10 h-auto"
        />
      </button>
      <button type="button" href="#" className="mr-2 hidden md:inline-block">
        <img
          src="./assets/images/fb-logo-mb.png"
          alt=""
          className="w-32 h-auto"
        />
      </button>
    </>
  );
};

export default Logo;
