import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import Base from '../../components/Base'
import PostForm from '../../components/organisms/PostForm'
import { BlogPost } from '../../types/blog'

const Edit: NextPage<BlogPost> = ({ id, title, body, cover }) => {
  return (
    <Base>
      <PostForm
        id={id}
        title={title}
        body={body}
        cover={cover}
      />
    </Base>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id: postId } = context.query;
  const res = await fetch(`https://62598fb5cda73d132d173293.mockapi.io/api/v1/posts/${postId}`);
  const { id, title, body, cover } = await res.json();

  return { props: { id, title, body, cover } };
}

export default Edit