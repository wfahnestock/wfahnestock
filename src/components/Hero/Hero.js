import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const downloadFile = (url, filename) => {
  fetch('http://wfahnestock.com/assets/files/WFahnestock_Resume.pdf', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  })
  .then((response) => response.blob())
  .then((blob) => {
    const url = window.URL.createObjectURL(
      new Blob([blob]),
    );
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `WFahnestock_Resume.docx`,
    );

    // Append to HTML Link Element page
    document.body.appendChild(link);

    // Start the download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  })
}


const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Introducing <br />
        Will Fahnestock
      </SectionTitle>
      <SectionText>
        Software Developer @ Access411 <br/>
        B.Sc Web Design & Development <br />
        {/* Creating web apps since 2014. */}
      </SectionText>
      <a onClick={downloadFile} download="WFahnestock_Resume.pdf">
      <Button>Get In Touch</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;