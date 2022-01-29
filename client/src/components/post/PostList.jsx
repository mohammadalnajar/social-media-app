/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useQuery } from 'react-query';
import { getAllPosts } from '../../utils/api';
import PostAction from './components/PostAction';
import PostAuthor from './components/PostAuthor';
import PostComment from './components/PostComment';
import PostContent from './components/PostContent';
import PostMedia from './components/PostMedia';
import PostStats from './components/PostStats';
import Post from './Post';

const PostList = () => {
  const { data, isSuccess, isLoading, isError } = useQuery(
    'getAllPosts',
    getAllPosts,
    {
      retry: 0,
    }
  );

  return (
    <div>
      {data?.data?.map((post) => {
        console.log(post);
        return (
          <Post key={post._id}>
            <PostAuthor createdAt={post.createdAt} />
            <PostContent text={post.text} />
            <PostMedia imageUrl={post.imageUrl} />
            <PostStats />
            <PostAction />
            <PostComment />
          </Post>
        );
      })}
    </div>
  );
};

export default PostList;
