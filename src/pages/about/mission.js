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
const Mission = () => {

  return (
    <Layout>
      <MainBlock>
        <TitleHeading>Mission</TitleHeading>
        <section>
          <p>
            Our mission is to democratize science. We want to allow more people to participate in research more equitably.
          </p>
          <p>
            We work towards this future by providing education, networking, and scientific communication opportunities to people around the world. Primarily, we focus on connecting people, allowing people to cross the boundary of traditionally closed off networks in science.
          </p>
          <p>
            We believe that collaboration, coalition building, transparent information, and active experimentation are key to addressing barriers in scientific participation, and we live by these in how we work and how we operate. We are a collection of hundreds of scientists contributing open code, data, publications, and educational materials in new ways that push the boundaries of how we learn and communicate with each other.
          </p>
        </section>
      </MainBlock>
      <hr />
    </Layout>
  );
};

export default Mission;