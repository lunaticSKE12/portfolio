import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, ITitle, ITitleItem, ITitleWrapper } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Porfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </SectionText>
      <ITitle>
        <ITitleWrapper>
          <ITitleItem>Web Developer</ITitleItem>
          <ITitleItem>UI/UX Designer</ITitleItem>
          <ITitleItem>Photographer</ITitleItem>
          <ITitleItem>Writer</ITitleItem>
          <ITitleItem>Content Creator</ITitleItem>
          <ITitleItem>Content Creator1</ITitleItem>
          <ITitleItem>Content Creator2</ITitleItem>
        </ITitleWrapper>
      </ITitle>
      <Button onClick={() => (window.location = 'https://google.com')}>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
