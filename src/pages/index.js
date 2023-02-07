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
  font-size: 76px;
  font-weight: bold;

  /* scale according to screen width */
  ${media.extraSmall`
    font-size: 16vw;
  `}
`;

const SubHeading = styled.h2`
  font-size: 30px;
  margin-bottom: 4rem;

  /* scale according to screen width */
  ${media.extraSmall`
    font-size: 10vw;
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
        <SubHeading>Democratizing Science - Connecting People</SubHeading>
        <section>
          <p>
            Neuromatch is a worldwide non-profit movement with the goal of equitable participation in scientific research. We run several activities to help further our cause.
          </p>
          <p>
            We started in neuroscience, and we are branching to other domains, starting with climate science.
          </p>
          <p>What we do:</p>
          <h3>Academy</h3>
          <p>
            Providing open-source teaching materials and courses with live instruction classrooms.
          </p>
          <h3>Community</h3>
          <p>
            Connecting scientists to form the social network needed to succeed in conducting and sharing research.
          </p>
          <h3>NMDA</h3>
          <p>
          Matching people with research, career, and collaboration opportunities.
          </p>
          <h3>Open Publishing</h3>
          <p>
          Reimagining scientific publishing as an equitable system.
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
