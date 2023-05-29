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
const Careers = () => {

  return (
    <Layout>
      <MainBlock>
        <TitleHeading>Careers</TitleHeading>
        <section>
          <p>
            There are no open career opportunities at Neuromatch currently.
          </p>
        </section>
      </MainBlock>
      <hr />
    </Layout>
  );
};

export default Careers;