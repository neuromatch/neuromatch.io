import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import { media } from "../../styles";
import { useThemeContext } from "../../styles/themeContext";

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

const MyBtn = styled.button`
  background-color: rgba(34, 34, 34, 1);
  border-color: rgba(34, 34, 34, 1);
  color: rgba(238, 238, 238, 1);
  line-height: 1.5;
  border-radius: 8px;
  margin-bottom: 2rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(50, 50, 50, 1);
  }

  @media (min-width: 1200px) {
    width: 30%;
    font-size: 1.5vw;
  }

  @media (min-width: 770px) and (max-width: 1199px) {
    width: 50%;
    font-size: 2vw;
  }

  @media (min-width: 481px) and (max-width: 769px) {
    width: 70%;
    font-size: 3vw;
  }

  @media (max-width: 480px) {
    width: 90%;
    font-size: 4vw;
  }
`;

const MyBtn2 = styled.button`
  background-color: rgba(34, 34, 34, 1);
  border-color: rgba(34, 34, 34, 1);
  color: rgba(238, 238, 238, 1);
  line-height: 1.5;
  border-radius: 8px;
  margin-bottom: 2rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(50, 50, 50, 1);
  }

  @media (min-width: 1200px) {
    width: 30%;
    font-size: 1.5vw;
  }

  @media (min-width: 770px) and (max-width: 1199px) {
    width: 50%;
    font-size: 2vw;
  }

  @media (min-width: 481px) and (max-width: 769px) {
    width: 70%;
    font-size: 3vw;
  }

  @media (max-width: 480px) {
    width: 90%;
    font-size: 4vw;
  }
`;

const btns = {
  light: <MyBtn>Submit a job</MyBtn>,
  dark: <MyBtn2>Submit a job</MyBtn2>
};

const TopicHeading = ({ children }) => <b>{`${children} · `}</b>;

TopicHeading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

// -- MAIN
export default () => {
  const { theme } = useThemeContext();

  return (
    <Layout>
      <MainBlock>
        <TitleHeading>Job Board</TitleHeading>
        <section>
          <p>
            Neuromatch is about connecting people. Let’s connect you to your
            next career opportunity.
          </p>
          <a
            href="https://airtable.com/shrhech6b8SCjmMTT"
            target="_blank"
            rel="noreferrer"
          >
            {btns[theme.toLowerCase()]}
          </a>
          <iframe
            title="job-board"
            class="airtable-embed"
            src="https://airtable.com/embed/shrlSuIKkDV6ks268?backgroundColor=red&amp;viewControls=on"
            frameborder="0"
            onmousewheel=""
            width="100%"
            height="600"
            style={{ background: "transparent", border: "1px solid #ccc" }}
          ></iframe>
        </section>
      </MainBlock>
      <hr />
    </Layout>
  );
};
