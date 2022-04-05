import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { userID } = useParams();

  return (
    <div className="w-full lg:w-2/3 xl:w-2/5 pt-32 lg:pt-16 px-2">
      Profile
      {userID}
    </div>
  );
};

export default Profile;
