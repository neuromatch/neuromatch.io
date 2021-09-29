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
            Neuromatch is a 501c3 not-for-profit organization in the United
            States. We are an online community of computational neuroscientists
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
      <MainBlock>
        <h2>History</h2>
        <p>
          Our first success was NMC1 held online on March 30-31st, 2020 which
          brought together nearly 3,000 attendees from around the world as part
          of 120 talks given by both senior and junior scientists. Reflecting
          our core philosophy of building connections and community we matched
          over 500 participants to 6 other partners each, based on interests
          gleaned from natural language processing of submitted abstracts. A
          follow up conference, NMC2 was held May 25–27 2020 which attracted
          nearly 4,000 participants and offered new forms of interaction between
          attendees.
        </p>
        <p>
          In July 2020 we organized a three-week-long online summer school for
          July 13-31, 2020 in response to the current Covid-19 crisis which has
          shut down nearly every summer program in the world at which students,
          postdocs and faculty would normally gather to acquire crucial skills
          and build networks that are the lifeblood of academic science. This
          crisis left an enormous hole in the career prospects of our most
          valuable and vulnerable scientists.
        </p>
        <p>
          In November 2020, we held NMC3, which attracted thousands of attendees
          across all areas of neuroscience.
        </p>
      </MainBlock>
      <hr />
      <MainBlock>
        <h2>Previous and Future Events</h2>
        <ul>
          <li>NMAcore · July 2021: the core 3-week NMA curriculum</li>
          <li>
            NMAminis · July 2021: half- or full-day workshops on targeted
            neuroscience-related topics
          </li>
          <li>
            NMA deep learning (NMA-DL) · August 2021: a deep learning curriculum
            for 3 weeks
          </li>
          <li>
            NMC 4.0 · December 1-2, 2021: a conference in computational
            neuroscience
          </li>
        </ul>
      </MainBlock>
    </Layout>
  );
};
