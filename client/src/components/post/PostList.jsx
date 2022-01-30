import React from 'react';
import { useQuery } from 'react-query';
import { getUserPosts } from '../../utils/api';
import LoadingPage from '../LoadingPage';
import PostAction from './components/PostAction';
import PostAuthor from './components/PostAuthor';
import PostComment from './components/PostComment';
import PostContent from './components/PostContent';
import PostMedia from './components/PostMedia';
import PostStats from './components/PostStats';
import Post from './Post';

const PostList = () => {
  const { data, isSuccess, isLoading, isError } = useQuery(
    'getUserPosts',
    getUserPosts,
    {
      retry: 0,
    }
  );

  return (
    <div>
      {isLoading && <LoadingPage />}
      {isSuccess
        ? data?.data?.map((post) => {
            const { _id: id } = post;
            console.log(post);

            return (
              <Post key={id}>
                <PostAuthor createdAt={post.createdAt} />
                <PostContent text={post.text} />
                <PostMedia imageUrl={post.imageUrl} />
                <PostStats
                  likes={post.likes}
                  dislikes={post.dislikes}
                  comments={post.comments}
                />
                <PostAction />
                <PostComment />
              </Post>
            );
          })
        : null}
    </div>
  );
};

export default PostList;
