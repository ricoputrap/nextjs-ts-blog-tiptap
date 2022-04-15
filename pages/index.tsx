import type { GetServerSideProps, NextPage } from 'next'
import Base from '../components/Base'

interface Props {
  data: []
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <Base>
    </Base>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return { props: { data } };
}

export default Home
