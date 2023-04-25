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
const Give = () => {

  return (
    <Layout>
      <MainBlock>
        <TitleHeading>Give</TitleHeading>
        <section>
          <p>
            Neuromatch helps work towards a more equitable future in scientific research. We do this by providing always affordable education, tackling problems of accessibility in education and scientific communication, and trying to address root causes in policy and system design for how people participate in and communicate science.
          </p>
          <p>
            We accept donations in the form of monetary gifts, stock donations, or donations of time via volunteering.
          </p>
          <h3>Financial Support</h3>
          <p>
            You can give directly via Every.org <a href="https://www.every.org/neuromatch?utmCampaign=donate-link#/donate" target="_blank" rel="noreferrer">here</a>. We also  work with Donor Advised Funds. We partner with <a href="https://www.fidelitycharitable.org/" target="_blank" rel="noreferrer">Fidelity Charitable</a> for this.
          </p>
          <p>
            If you would like to meet with our team to learn about what impact your donations can make, schedule a meeting <a href="https://calendly.com/neuromatch-giving-team/learn-about-neuromatch" target="_blank" rel="noreferrer">here</a>.
          </p>
          <h3>Volunteering</h3>
          <p>
            Neuromatch is built with loving care by a large team of volunteers from all over the world.  You can express your interest in helping us by filling out this <a href="https://airtable.com/shrlo3trJbLCvqPmA" target="_blank" rel="noreferrer">form</a>. Thank you!
          </p>
        </section>
      </MainBlock>
      <hr />
    </Layout>
  );
};


export default Give;