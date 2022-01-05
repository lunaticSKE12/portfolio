import { ToggleDiv, ToggleIcon, ToggleButton } from './ToggleStyle';
import React from 'react';

const Toggle = () => {
  return (
    <ToggleDiv>
      <ToggleIcon src="/images/sun.png" alt="" />
      <ToggleIcon src="/images/moon.png" alt="" />
      <ToggleButton className="t-button"></ToggleButton>
    </ToggleDiv>
  );
};

export default Toggle;
