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
    font-size: 16vw;
  `}
`;


const TopicHeading = ({ children }) => <b>{`${children} · `}</b>;

TopicHeading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};


// -- MAIN
export default () => {

  return (
    <Layout>
      <MainBlock>
        <TitleHeading>Volunteering</TitleHeading>
        <section>
          <iframe title="volunteering-airtable" src="https://airtable.com/embed/shrFkKfMXPJBgbxtX?backgroundColor=green&amp;viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: 'transparent', border: '1px solid #ccc'}}></iframe>
        </section>
      </MainBlock>
      <hr />
    </Layout>
  );
};
