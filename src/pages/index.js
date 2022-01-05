import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Intro from '../components/Intro/Intro';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Contact from '../components/Contact/Contact';
import Toggle from '../components/Toggle/Toggle';
import { ThemeContext } from './context';
import { useContext } from 'react';

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : 'white',
        color: darkMode && 'white',
      }}
    >
      <Layout>
        <Toggle />
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Intro />
        <Projects />
        <Technologies />
        <Timeline />
        <Acomplishments />
        <Contact />
      </Layout>
    </div>
  );
};

export default Home;
