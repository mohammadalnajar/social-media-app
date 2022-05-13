import React from 'react';
import CreatePost from '../../../features/createPost/CreatePost';
import PostList from '../feed/postsList/PostList';
import UserRooms from '../usersRooms/UserRooms';
import UserStories from '../usersStories/UserStories';

const Feed = () => {
  return (
    <div className="w-full lg:w-2/3 xl:w-2/5 pt-32 lg:pt-16 px-2">
      {/* <!-- STORY --> */}
      <UserStories />
      {/* <!-- END STORY --> */}

      {/* <!-- POST FORM --> */}
      <CreatePost />
      {/* <!-- END POST FORM --> */}

      {/* <!-- ROOM --> */}
      <UserRooms />
      {/* <!-- END ROOM --> */}

      {/* <!-- LIST POST --> */}

      <PostList />

      {/* <!-- END LIST POST --> */}
    </div>
  );
};

export default Feed;
