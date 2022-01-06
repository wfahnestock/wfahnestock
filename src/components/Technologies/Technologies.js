import React from 'react';
import { DiFirebase, DiReact, DiResponsive } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've had the privilege of utilizing a wide range of different technologies in the web development arena.
      From back-end to front-end technologies, I've worked in many different platforms.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="6rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            React.js, Angular 13 & Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="6rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            MS SQL Server, ExpressJS, NextJS
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiResponsive size="6rem" />
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>
            Experience with: <br />
            React Native and Xamarin
          </ListParagraph>
        </ListContainer>
      </ListItem>


    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
