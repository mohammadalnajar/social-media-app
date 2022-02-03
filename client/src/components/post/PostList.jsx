import React from 'react';
import { useQuery } from 'react-query';
import { getFeedPosts } from '../../utils/api';
import LoadingPage from '../LoadingPage';
import PostAction from './components/PostAction';
import PostAuthor from './components/PostAuthor';
import PostAuthorAction from './components/PostAuthorAction';
import PostComment from './components/PostComment';
import PostContent from './components/PostContent';
import PostMedia from './components/PostMedia';
import PostStats from './components/PostStats';
import Post from './Post';

const PostList = () => {
  const {
    // empty objects are default placeholders to prevent react from throwing an error
    data: { data: { posts } = {} } = {},
    isSuccess,
    isLoading,
  } = useQuery('getFeedPosts', getFeedPosts, {
    retry: 0,
  });

  return (
    <div>
      {isLoading && <LoadingPage />}
      {isSuccess
        ? posts
            ?.sort((a, b) => {
              return new Date(b.createdAt) - new Date(a.createdAt);
            })
            .map((post) => {
              const { _id: id } = post;
              console.log(post);

              return (
                <Post key={id}>
                  <PostAuthor
                    createdAt={post.createdAt}
                    authorData={post.authorData}
                  >
                    <PostAuthorAction />
                  </PostAuthor>
                  <PostContent text={post.text} />
                  <PostMedia imageUrl={post.imageUrl} />
                  <PostStats
                    likes={post.likes}
                    dislikes={post.dislikes}
                    comments={post.comments}
                  />
                  <PostAction />
                  <PostComment authorData={post.authorData} />
                </Post>
              );
            })
        : null}
    </div>
  );
};

export default PostList;
