import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <HeaderThree>Stack</HeaderThree>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            {visit.length ? <ExternalLinks href={visit} target="_blank">Visit</ExternalLinks> : <ExternalLinks target="_blank" aria-disabled>Visit</ExternalLinks>}
            {source.length ? <ExternalLinks href={source} target="_blank">Code</ExternalLinks> : <ExternalLinks target="_blank" aria-disabled>Code</ExternalLinks>}
            
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <br />
    <SectionDivider />
  </Section>
  
);

export default Projects;