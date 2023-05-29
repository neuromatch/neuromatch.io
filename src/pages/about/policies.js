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
const Policies = () => {

  return (
    <Layout>
      <MainBlock>
        <TitleHeading>Policies</TitleHeading>
        <section>
          <p>
            An index of all of our policies and governance documents.
          </p>
          <h4>Documents</h4>
          <ul>
            <li>AR Bylaws - <a
          href="https://drive.google.com/file/d/1m8S6Zgz2YooNiF4plVLNnp5RGKoNVfnH/view?usp=share_link" target="_blank" rel="noreferrer">click
          here</a></li>
          <li>Conflict of Interest Policy - <a
          href="https://drive.google.com/file/d/1lDPT_udbT7K6TFGZtAZNr-RKtGamhh6_/view?usp=share_link" target="_blank" rel="noreferrer">click
          here</a></li>
          <li>Data Retention Policy - <a
          href="https://drive.google.com/file/d/187N7htTCkSuGfx8fqgSMZxoCDszX9Lq-/view?usp=share_link" target="_blank" rel="noreferrer">click
          here</a></li>
          <li>Donation and Gift Acceptance - <a
          href="https://drive.google.com/file/d/1ZILc4lB2JE3Z6V2nhW78nx3EvzFiLyzA/view?usp=share_link" target="_blank" rel="noreferrer">click
          here</a></li>
          <li>Neuromatch Code of Conduct - <a
          href="https://drive.google.com/file/d/1uogBszCuY2BzPmb7S5A2TaXeIgZz6bB-/view?usp=share_link" target="_blank" rel="noreferrer">click
          here</a></li>
          <li>NM Volunteer Agreement & Policies (fillable) - <a
          href="https://drive.google.com/file/d/1lOD7eTXNFIri9S6-LrE6wi-c4juXbm3T/view?usp=share_link" target="_blank" rel="noreferrer">click
          here</a></li>
          <li>Non-discrimination and Disability Accomodation Policy - <a
          href="https://drive.google.com/file/d/1RczdP27jDvR6KovpMSYf_DLSisM0bBit/view?usp=share_link" target="_blank" rel="noreferrer">click
          here</a></li>
          <li>Public Information and Disclosure Policy - <a
          href="https://drive.google.com/file/d/1-f9PjxbhEWLxdREDFKOagPm4VAIyq3p9/view?usp=share_link" target="_blank" rel="noreferrer">click
          here</a></li>
          <li>Grant and Financial Management Policy - <a
          href="https://drive.google.com/file/d/1BR-sbwFPXslrLVMpq5al5y3wJglqElLQ/view?usp=share_link" target="_blank" rel="noreferrer">click
          here</a></li>
          <li>Hiring and Compensation Policy - <a
          href="https://drive.google.com/file/d/1iuUpiBXe9YtIfXdObtMRhf8hHRsvJo_n/view?usp=share_link" target="_blank" rel="noreferrer">click
          here</a></li>
          <li>Social Media and Lobbying Policy - <a
          href="https://drive.google.com/file/d/1tIgh0fdXS1dPTVJbiFHTzTPm_YUg7g68/view?usp=share_link" target="_blank" rel="noreferrer">click
          here</a></li>
          <li>Whistleblower Policy - <a
          href="https://drive.google.com/file/d/1Av1vSksgS5bUDx7krit0OiQMXjfIOCKm/view?usp=share_link" target="_blank" rel="noreferrer">click
          here</a></li>
          </ul>
        </section>
      </MainBlock>
      <hr />
    </Layout>
  );
};

export default Policies;