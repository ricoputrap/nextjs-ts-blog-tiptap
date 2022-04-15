import React from 'react'
import Head from 'next/head'
import styled from 'styled-components';

interface Props {
  title?: string;
  children: React.ReactNode;
}

const Main = styled.main`
  padding: 40px 240px;
`;

const Base: React.FC<Props> = ({
  title = "BLOG",
  children
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="A developer-friendly blog site."
        />
      </Head>

      <Main>{children}</Main>

      <footer></footer>
    </>
  )
}

export default Base