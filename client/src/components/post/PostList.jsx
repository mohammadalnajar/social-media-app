import React from 'react';
import { useQuery } from 'react-query';
import ErrorAlert from '../ErrorAlert';
import LoadingPage from '../LoadingPage';
import PostActions from './components/PostActions';
import PostAuthor from './components/PostAuthor';
import PostAuthorAction from './components/PostAuthorAction';
import PostComment from './components/PostComment';
import PostContent from './components/PostContent';
import PostMedia from './components/PostMedia';
import Post from './Post';

const PostList = () => {
  const {
    // empty objects are default placeholders to prevent react from throwing an error
    data: { data: { posts } = {} } = {},
    isSuccess,
    isLoading,
    isError,
  } = useQuery('getFeedPosts');

  const {
    data: {
      data: { _id: userId },
    },
  } = useQuery('fetchUser');

  if (isError) {
    return (
      <ErrorAlert
        errorMessage="Something went wrong, please refresh the page"
        duration={1 * 60 * 1000} // 1 min
      />
    );
  }

  return (
    <div>
      {isLoading && <LoadingPage />}
      {isSuccess
        ? posts?.map((post) => {
            const { _id: id } = post;
            return (
              <Post key={id}>
                <PostAuthor
                  createdAt={post.createdAt}
                  authorData={post.authorData}
                >
                  {userId === post.authorData.userId && (
                    <PostAuthorAction
                      id={id}
                      userId={post.userId}
                      text={post.text}
                      visibility={post.visibility}
                      firstName={post.authorData.firstName}
                    />
                  )}
                </PostAuthor>
                <PostContent text={post.text} />
                <PostMedia imageUrl={post.imageUrl} />
                <PostActions postId={id} />
                <PostComment postId={id} />
              </Post>
            );
          })
        : null}
    </div>
  );
};

export default PostList;
