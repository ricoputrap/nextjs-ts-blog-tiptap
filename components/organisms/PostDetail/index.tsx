import Image from 'next/image';
import React from 'react'
import { BlogPost } from '../../../types/blog';
import { Container, Details } from './index.styles';

const PostDetail: React.FC<BlogPost> = ({ id, title, body, cover, createdAt }) => {
  return (
    <Container>
      <Image
        className='cover'
        src={cover}
        width={717}
        height={392}
        alt="cover"
      />
      <Details>
        <div className='flex flex-between'>
          <p className='published-date'>March 22, 2022</p>
          <div>
            <span>X</span>
            <span>Y</span>
          </div>
        </div>

        <h2 className='title'>{ title }</h2>
        <div className='body'>{ body }</div>
      </Details>
    </Container>
  )
}

export default PostDetail;