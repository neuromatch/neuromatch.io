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
            <h3>Research Assistant Professor</h3>
              <p>We are looking for a part-time or full time Research Assistant Professor to help lead development and evaluation of our global online education program while also establishing our education research program.&nbsp;For more info, see our job posting <a href="https://www.linkedin.com/jobs/view/3835533241/?refId=YG2XYJ9CReadlyw0GQ4lpw%3D%3D&amp;trackingId=YG2XYJ9CReadlyw0GQ4lpw%3D%3D" target="_blank" rel="noreferrer">here</a>.</p>
{/*          <p>
            There are no open career opportunities at Neuromatch currently.
          </p> */}
        </section>
      </MainBlock>
      <hr />
    </Layout>
  );
};

export default Careers;
