import { ToggleDiv, ToggleIcon, ToggleButton } from './ToggleStyle';
import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../pages/context';

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' });
  };
  return (
    <ToggleDiv>
      <ToggleIcon src="/images/sun.png" alt="" />
      <ToggleIcon src="/images/moon.png" alt="" />
      <ToggleButton
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></ToggleButton>
    </ToggleDiv>
  );
};

export default Toggle;
