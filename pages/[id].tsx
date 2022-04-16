import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import Base from '../components/Base'
import PostDetail from '../components/organisms/PostDetail'
import { BlogPost } from '../types/blog'

const Detail: NextPage<BlogPost> = ({ id, title, body, cover, createdAt }) => {
  return (
    <Base>
      <PostDetail
        id={id}
        title={title}
        body={body}
        cover={cover}
        createdAt={createdAt}
      />
    </Base>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id: postId } = context.query;
  const res = await fetch(`https://62598fb5cda73d132d173293.mockapi.io/api/v1/posts/${postId}`);
  const { id, title, body, cover, createdAt } = await res.json();

  return { props: { id, title, body, cover, createdAt } };
}

export default Detail