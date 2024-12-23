import React from 'react';

const LargeContainer = ({ children }) => {
  return <div className="w-full max-w-[81rem] mx-auto">{children}</div>;
};

export default LargeContainer;
