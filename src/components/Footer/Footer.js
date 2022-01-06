import React, { useContext } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';
import Contact from '../Contact/Contact';
import { FaLine } from 'react-icons/fa';
import { ThemeContext } from '../../pages/context';

const Footer = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <FooterWrapper>
      {/* <Contact /> */}
      {/* <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:111-111-1111">111-111-11111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:jamesnapongd@gmail.com">
            jamesnapongd@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList> */}
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovation</Slogan>
        </CompanyContainer>
        <SocialContainer>
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
