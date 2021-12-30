import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Porfolio
      </SectionTitle>
      <SectionText>asdfjklasdfjkasl</SectionText>
      <Button onClick={() => (window.location = 'https://google.com')}>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
