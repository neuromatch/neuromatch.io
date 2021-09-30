import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const Container = styled.div`
  text-align: center;
`;

export default () => (
  <Layout>
    <Container>
      <h1>
        We've moved!
      </h1>
      <p>
        Please checkout the Neuromatch Conference at
      </p>
      <Link to="https://conference.neuromatch.io">
        conference.neuromatch.io
      </Link>
    </Container>
  </Layout>
);
