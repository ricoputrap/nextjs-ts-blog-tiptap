import React from 'react'
import { Posts } from '../../../types/blog';
import Post from '../../molecules/Post';
import { Container } from './index.styles';

const Gallery: React.FC<Posts> = ({ posts }) => {
  return (
    <Container>
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          cover={post.cover}
          createdAt={post.createdAt}
        />
      ))}
    </Container>
  )
}

export default Gallery