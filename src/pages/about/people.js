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

// -- MAIN
const People = () => {
  return (
    <Layout>
      <MainBlock>
        <TitleHeading>People</TitleHeading>
        <section>
          <h2>Who we are?</h2>
          <p>
            Neuromatch (including the Academy and Conference) is a 501(c)(3)
            non-profit organization created to provide an inclusive educational
            and online networking experience in computational neuroscience.
          </p>

          <h1 style={{ marginTop: '3rem' }}>Neuromatch Staff</h1>
          <iframe
            title="Staff-airtable"
            src="https://airtable.com/embed/shr0hAW3IeWvwBQpj?backgroundColor=green&viewControls=on"
            frameborder="0"
            width="100%"
            height="400"
            style={{ background: "transparent" }}
            sandbox="allow-same-origin allow-scripts"
            id="myAirtableEmbed"
          ></iframe>
          <h1 style={{ marginTop: '3rem' }}>Neuromatch, Inc. Board of Directors</h1>
          <iframe
            title="NM-board-of-director"
            src="https://airtable.com/embed/app32npl2ZlbJvtXK/shrXpw6AbK8UELLoE?backgroundColor=green&viewControls=on"
            frameborder="0"
            width="100%"
            height="750"
            style={{ background: "transparent" }}
          ></iframe>

          <h1 style={{ marginTop: '3rem' }}>Neuromatch Volunteers</h1>
          <iframe
            title="NMA-volunteers-airtable"
            src="https://airtable.com/embed/shr8nHaTd98S0S8lM?backgroundColor=green&viewControls=on"
            frameborder="0"
            width="100%"
            height="800"
            style={{ background: "transparent", paddingBottom: "-100px" }}
          ></iframe>

          <h1 style={{ marginTop: '3rem' }}>CMA Volunteers</h1>
          <iframe
            title="CMA-volunteers-airtable"
            src="https://airtable.com/embed/shriCyqVNJiJt5RUg?backgroundColor=green&viewControls=on"
            frameborder="0"
            width="100%"
            height="800"
            style={{ background: "transparent" }}
          ></iframe>
        </section>
      </MainBlock>
      <hr />
    </Layout>
  );
};

export default People;
