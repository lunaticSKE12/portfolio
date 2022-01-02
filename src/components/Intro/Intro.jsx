import React from 'react';
import { Section } from '../../styles/GlobalComponents';
import {
  I,
  ILeft,
  IRight,
  ILeftWrapper,
  IIntro,
  IName,
  ITitle,
  ITitleItem,
  ITitleWrapper,
  Img,
  IBg,
} from './IntroStyles';

const intro = () => {
  return (
    <Section>
      <I>
        <ILeft>
          <ILeftWrapper>
            <IIntro>Hello, My name is</IIntro>
            <IName>James</IName>
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
            <p className="i-desc">I design asdfkjiefawe ....</p>
          </ILeftWrapper>
        </ILeft>
        <IRight>
          <IBg></IBg>
          <Img src={'/images/people.png'} />
        </IRight>
      </I>
    </Section>
  );
};

export default intro;
