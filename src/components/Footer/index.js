//import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { media } from "../../styles";
import { color } from "../../utils";


const StyledFooter = styled.div`
  height: 5.5rem;
  background-color: ${p =>
    color.scale(p.theme.colors.primary, p.theme.colors.factor * 7)};

  display: flex;
  align-items: center;
  justify-content: center;

  /* on small screen it could be 4 lines */
  ${media.extraSmall`
    height: 6.5em;
  `}

  padding: 7rem auto;
`;

const StyledFooterText = styled.div`
  font-size: 0.75em;
  text-align: center;
  color: ${p => p.theme.colors.secondary};
  line-height: 1.6em;
`;

//const StyledLink = styled.a.attrs({
//  target: '_blank',
//  rel: 'noreferrer',
//})`
//  color: ${p => p.theme.colors.accent};
//  cursor: pointer;
//`;

//const StyledInternalLink = styled(Link)`
//  color: ${p => p.theme.colors.accent};
//`;

const Red = styled.span`
  color: ${p => p.theme.colors.danger};
`;

const Footer = () => (
  <StyledFooter>
    <StyledFooterText>
      <a target="_blank" rel="noreferrer" href="https://github.com/neuromatch">
        Github
      </a>
      {" | "}
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/neuromatch">
        LinkedIn
      </a>
      {" | "}
      <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC4LoD4yNBuLKQwDOV6t-KPw">
        YouTube
      </a>
      {" | "}
      <a target="_blank" rel="noreferrer" href="https://twitter.com/neuromatch?lang=en">
        Twitter
      </a>
      {" | "}
      <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Neuromatch/">
        Facebook
      </a>
      {" | "}
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/neuromatch/">
        Instagram
      </a>
      <br />
      Made with
      <Red>&nbsp;❤&nbsp;</Red>
      by Neuromatch
      <br />
      <a target="_blank" rel="noreferrer" href="https://neuromatch.myspreadshop.com/">
        US Merchandise Store
      </a>
      {" | "}
      <a target="_blank" rel="noreferrer" href="https://neuromatch.myspreadshop.net/">
        Rest of Work Merchandise Store
      </a>
      <br />
      </StyledFooterText>
  </StyledFooter>
);

export default Footer;
