import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import { media } from "../../styles";


// -- COMPONENTS
const MainBlock = styled.section`
  padding-bottom: ${1.56 / 2}rem;
`;

const TitleHeading = styled.h1`
  font-size: 76px;
  font-weight: bold;

  /* scale according to screen width */
  ${media.extraSmall`
    font-size: 13vw;
  `}
`;


const TopicHeading = ({ children }) => <b>{`${children} · `}</b>;

TopicHeading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};


// -- MAIN
export default () => {

  // Create a button element
  const applyButton = document.createElement("button");

  // Set the button text
  applyButton.textContent = "Apply here for open volunteering positions";

  // Set the button link
  applyButton.onclick = function() {
    window.location.href = "https://airtable.com/shrlo3trJbLCvqPmA";
  };

  return (
    <Layout>
      <MainBlock>
        <TitleHeading>Volunteering</TitleHeading>
        <section>
          {applyButton}
          <iframe title="volunteering-airtable" src="https://airtable.com/embed/shrFkKfMXPJBgbxtX?backgroundColor=green&amp;viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: 'transparent', border: '1px solid #ccc'}}></iframe>
        </section>
      </MainBlock>
      <hr />
    </Layout>
  );
};
