import Link from 'next/link';
import React, { useContext } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { FaLine } from 'react-icons/fa';
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';
import { ThemeContext } from '../../pages/context';
const Header = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Container nopadding id="header">
      <Div1>
        <Link href="/">
          <a
            style={{
              display: 'flex',
              alignItems: 'center',
              color: darkMode && 'white',
              marginBottom: '20px',
            }}
          >
            <DiCssdeck size="3rem" />
            <Span>Profolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink style={{ color: darkMode && 'white' }}>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink style={{ color: darkMode && 'white' }}>
              Technologies
            </NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink style={{ color: darkMode && 'white' }}>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons
          href="https://github.com"
          style={{ color: darkMode && 'white' }}
        >
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://linkedin.com"
          style={{ color: darkMode && 'white' }}
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://instagram.com"
          style={{ color: darkMode && 'white' }}
        >
          <FaLine size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};
export default Header;
