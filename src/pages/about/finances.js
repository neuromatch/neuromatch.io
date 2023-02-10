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
        <TitleHeading>Finances</TitleHeading>
        <section>
          <p>
            Neuromach supports information transparency. See our filed finance documents below.
          </p>
          <h4>Tax Filings</h4>
          <ul>
            <li>2020 - <a
          href="https://drive.google.com/file/d/1z7Av_FLmZAD-JvdpAIp8b1Fi5cbVSMuC/view?usp=share_link" target="_blank" rel="noreferrer">click
          here</a></li>
            <li>2021 - <a
          href="https://drive.google.com/file/d/16wOi1VcWX7lSm5HAHnpV9wnqnIWpFs1v/view?usp=sharing" target="_blank" rel="noreferrer">click
          here</a></li>
          </ul>
        </section>
      </MainBlock>
      <hr />
    </Layout>
  );
};
