import React from 'react';
import { useQuery } from 'react-query';
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

  return (
    <ul className="hidden md:flex mr-4 items-center justify-center">
      <li className="h-full hidden xl:flex">
        <NavAvatar>
          <Avatar
            imageUrl={userData.profileImageUrl}
            firstName={capitalize(userData.firstName)}
          />
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
