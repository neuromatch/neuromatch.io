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
        <TitleHeading>Press</TitleHeading>
        <section>
          <p>
            Links to our press and other materials.
          </p>
          <h4>Links</h4>
            <ul>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://incf.org/blog/neuromatch-academy-online-computational-neuroscience-training-event">INCF hosting of NMA</a></li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://twitter.com/neuromatch?lang=en">Neuromatch Twitter account</a></li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://www.nature.com/articles/s42256-020-0182-5.pdf?origin=ppub">Nature Machine Intelligence editorial</a></li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://www.nature.com/articles/d41586-020-02347-9">Nature story about NMA overcoming Iran sanctions</a></li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://medium.com/@yeditepe.cogsci/neuromatch-academy-experience-837e8a1c153f">Neuromatch Academy Experience</a> - a Medium article written by interactive track students</li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://www.simonsfoundation.org/2020/09/17/the-self-organized-movement-to-create-an-inclusive-computational-neuroscience-school/?fbclid=IwAR0dUTOhhCRjZtItO2t0Mu83QpQWojQfeX3bmw7RAmSXTdDavS_CdWzDnh4">Simon's Foundation write-up</a> of NMA by Ashley Juavinett</li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="http://www.rdgao.com/blog/2020/09/16/">Richard Gao's blog post</a></li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://knowingneurons.com/2020/10/13/neuroscience-education-in-the-time-of-covid-19-an-interview-with-dr-megan-peters-about-neuromatch-academy/">Knowing Neurons</a> interview with <a rel="nofollow" class="external text" href="https://faculty.sites.uci.edu/cnclab/">Dr. Megan Peters</a> about NMA</li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://biaswatchneuro.com/bwn-award/">NMA receives honorable mentions from BiasWatchNeuro</a></li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://arxiv.org/abs/2012.08973">NMA Executive Summary paper</a></li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://medium.com/the-spike/2020-a-moderately-bemused-review-of-the-year-in-neuroscience-99ca8744d03c">Mark Humphries' 2020 review</a> - mentioning Neuromatch as a positive thing</li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(21)00074-0/fulltext">Lancet article: "Computational neuroscience with global accessibility"</a></li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://www.superdatascience.com/podcast/learning-deep-learning-together">SuperDataScience interview of Konrad</a> for NMA 2021</li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://xcorr.net/2021/03/25/building-neuromatch-academy/">Building NMA</a> by Patrick Mineault</li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://gunnarblohm.medium.com/neuromatch-academy-the-story-cdaec59c430e">NMA The story</a> by Gunnar</li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://healthsci.queensu.ca/stories/feature/neuromatch-academy-changing-landscape-computational-neuroscience-education">Queen's FHS feature story about NMA</a></li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://braininspired.co/podcast/nma-1/">Brain Inspired podcast 1</a> - Machine Learning</li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://braininspired.co/podcast/nma-2/">Brain Inspired podcast 2</a> - Dynamical Systems</li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://braininspired.co/podcast/nma-3/">Brain Inspired podcast 3</a> - Normative models of brain &amp; mind</li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://www.sciencedirect.com/science/article/pii/S0896627321005420">For love of neuroscience: The Neuromatch movement</a> - a love letter by Konrad Kording</li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://www.linkedin.com/pulse/neuromatch-academy-reflections-week-jo%C3%A3o-ara%C3%BAjo/">NMA student reflections</a> by Joao Araujo</li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://www.mcgill.ca/neuro/article/open-science/rewarding-excellence-open-science?s=03">Neuromatch wins the 2022 Neuro - Irv and Helga Cooper Foundation Open Science Prize (international)</a></li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://simpleneuro.org/democratisation-of-neuroscience-education/">Democratisation of neuroscience education</a> by Sabina Nowakowska (a NMA participant experience)</li>
              <li> <a target="_blank" rel="noreferrer" class="external text" href="https://www.socsci.uci.edu/newsevents/news/2023/2023-01-04-neuromatch-academy.php">Networking for the next generation of neuroscientists</a> - a UCI story on NMA</li>
          </ul>
        </section>
      </MainBlock>
      <hr />
    </Layout>
  );
};
