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
      <SectionText>asdfjklasdfjkasl</SectionText>
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
