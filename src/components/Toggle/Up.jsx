import { ToggleDiv, SocialIcons, ToggleButton } from './UpStyle';
import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../pages/context';
import Link from 'next/link';
import { IoArrowUpSharp } from 'react-icons/io';

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' });
  };
  return (
    <ToggleDiv>
      <Link href="#header">
        <ToggleButton src={'./images/arrow-up-bold-circle.png'} />
      </Link>
    </ToggleDiv>
  );
};

export default Toggle;
