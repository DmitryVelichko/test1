import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

const PostItem = () => {
  const { id } = useParams<{ id?: string }>();

  return <div>{id}</div>;
};

export default PostItem;
