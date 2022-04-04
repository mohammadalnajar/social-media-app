/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import capitalize from '../../../../utils/helpers';
import Avatar from '../../../Avatar';
import DarkModeMoon from '../DarkModeMoon';
import Messenger from '../features/messenger/Messenger';
import Notifications from '../features/notifications/Notifications';
import Dropdown from './dropdown/Dropdown';
import NavAvatar from './NavAvatar';

const OptionsMenu = () => {
  const {
    data: { data: userData },
  } = useQuery('fetchUser');
  console.log(userData);

  return (
    <ul className="hidden md:flex mr-4 md:w-1/3 items-center justify-end">
      <li className="h-full hidden xl:flex">
        <NavAvatar>
          <Link to={`/profile/${userData._id}`}>
            <Avatar
              imageUrl={userData.profileImageUrl}
              firstName={capitalize(userData.firstName)}
            />
          </Link>
        </NavAvatar>
      </li>

      <li>
        <Dropdown />
      </li>
      <li>
        <Messenger extraClasses="" />
      </li>
      <li>
        <Notifications />
      </li>
      <li>
        <DarkModeMoon extraClasses="" />
      </li>
    </ul>
  );
};

export default OptionsMenu;
