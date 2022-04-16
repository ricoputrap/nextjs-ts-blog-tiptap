import Image from 'next/image';
import React, { useMemo } from 'react'
import { MdDelete, MdEdit } from "react-icons/md";
import getFormattedDate from '../../../helpers/getFormattedDate';
import { BlogPost } from '../../../types/blog';
import { Actions, Details, Icon } from './index.styles';

const PostDetail: React.FC<BlogPost> = ({ id, title, body, cover, createdAt }) => {
  const publishedDate = useMemo(() => getFormattedDate(createdAt), [createdAt]);

  const confirmDetelePost = async () => {
    const isConfirmed = confirm("Are you sure want to delete this post?");
    if (isConfirmed)
      await deletePost();
  }

  const deletePost = async () => {
    const URL = `https://62598fb5cda73d132d173293.mockapi.io/api/v1/posts/${id}`;
    await fetch(URL, {
      method: "DELETE"
    });
    window.location.replace("/");
  }

  return (
    <div className='container'>
      <Image
        className='cover'
        src={cover}
        width={717}
        height={392}
        alt="cover"
      />
      <Details>
        <div className='flex flex-between'>
          <p className='published-date'>{ publishedDate }</p>
          <Actions>
            <Icon>
              <MdEdit />
            </Icon>
            <Icon onClick={confirmDetelePost}>
              <MdDelete />
            </Icon>
          </Actions>
        </div>

        <h2 className='title'>{ title }</h2>
        <div className='body'>{ body }</div>
      </Details>
    </div>
  )
}

export default PostDetail;