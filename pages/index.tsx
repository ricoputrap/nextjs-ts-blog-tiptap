import type { GetServerSideProps, NextPage } from 'next'
import Base from '../components/Base'
import Gallery from '../components/organisms/Gallery'
import { Posts } from '../types/blog'

const Home: NextPage<Posts> = ({ posts }) => {
  return (
    <Base>
      <Gallery posts={posts} />
    </Base>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://62598fb5cda73d132d173293.mockapi.io/api/v1/posts");
  const posts = await res.json();

  return { props: { posts } };
}

export default Home
