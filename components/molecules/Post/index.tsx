import Image from 'next/image'
import React from 'react'
import { BlogPost } from '../../../types/blog'
import { Card, Details, PublishedDate, Title } from './index.styles'

const Post: React.FC<BlogPost> = ({ title, cover, createdAt }) => {
  return (
    <Card>
      <Image
        className='gallery__post-cover'
        src={cover}
        width={430}
        height={235}
        alt="cover"
      />

      <Details>
        <PublishedDate>March 22, 2022</PublishedDate>
        <Title>{ title }</Title>
      </Details>
    </Card>
  )
}

export default Post