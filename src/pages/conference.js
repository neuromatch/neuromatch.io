import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const Container = styled.div`
  text-align: center;
`;

export default () => {
  const [canRedirect, setCanRedirect] = useState(true)

  useEffect(() => {
    if (document?.location) {
      document.location = 'https://conference.neuromatch.io';
    } else {
      setCanRedirect(false)
    }
  }, [])

  if (!canRedirect) {
    return (
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
    )
  }

  return null
};
