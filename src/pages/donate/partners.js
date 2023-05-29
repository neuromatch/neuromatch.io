import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import { media } from "../../styles";
import sponsors from "../../../static/svgs/sponsors/sponsors.svg";


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
const Partners = () => {

  return (
    <Layout>
      <MainBlock>
        <TitleHeading>Partners</TitleHeading>
        <section>
          <img src={sponsors} alt="Sponsors" />
        </section>
      </MainBlock>
      <hr />
    </Layout>
  );
};

export default Partners;
