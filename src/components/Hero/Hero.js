import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Introducing <br />
        Will Fahnestock
      </SectionTitle>
      <SectionText>
        B.Sc Web Design & Development, building web apps since 2014.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com/'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;