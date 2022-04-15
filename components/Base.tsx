import React from 'react'
import Head from 'next/head'

interface Props {
  title?: string;
  children: React.ReactNode;
}

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

      <main>{children}</main>

      <footer></footer>
    </>
  )
}

export default Base