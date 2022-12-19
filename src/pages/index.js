import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { media } from "../styles";
import { useThemeContext } from "../styles/themeContext";

// -- CONSTANTS
const logos = [
  {
    key: "academy",
    dark: "svgs/logos/neuromatch-academy-dark.svg",
    light: "svgs/logos/neuromatch-academy-light.svg"
  },
  {
    key: "conference",
    dark: "svgs/logos/neuromatch-conference-dark.svg",
    light: "svgs/logos/neuromatch-conference-light.svg"
  }
];

// -- COMPONENTS
const MainBlock = styled.section`
  padding-bottom: ${1.56 / 2}rem;
`;

const TitleHeading = styled.h1`
  font-size: 72px;
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

const LogosArray = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* show goals vertically in smaller screen */
  ${media.small`
    justify-content: center;
    flex-wrap: wrap;
  `}
`;

const LogoImage = styled.img`
  margin: 2.4rem 0;
  width: 300px;
`;

// -- MAIN
export default () => {
  const { theme } = useThemeContext();

  return (
    <Layout>
      <MainBlock>
        <TitleHeading>neuromatch</TitleHeading>
        <section>
          <p>
            Neuromatch is a worldwide not-for-profit organization registered in the United
            States (501c3). We are an online community of computational neuroscientists
            whose mission is to foster inclusive global interactions for
            learning, mentorship, networking, and professional development.
          </p>
          <p>
            We run 2 organizations within Neuromatch: Neuromatch Academy
            (academy.neuromatch.io) and Neuromatch Conference
            (conference.neuromatch.io)
          </p>
          <LogosArray>
            {logos.map(x => (
              <a href={`https://${x.key}.neuromatch.io`}>
                <LogoImage key={x.key} src={x[theme.toLowerCase()]} />
              </a>
            ))}
          </LogosArray>
        </section>
      </MainBlock>
      <hr />
    </Layout>
  );
};
