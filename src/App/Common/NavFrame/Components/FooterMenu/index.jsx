import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import GroupsIcon from '@mui/icons-material/Workspaces';
import PeopleIcon from '@mui/icons-material/Groups';
import BillsIcon from '@mui/icons-material/ReceiptOutlined';
import SettleupIcon from '@mui/icons-material/MonetizationOnOutlined';

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

export default function FooterMenu() {
  const [value, setValue] = useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  // const y =  <Fab color="primary" aria-label="add"><AddIcon /></Fab>;
  const Y = GroupsIcon;
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<GroupsIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<BillsIcon />}
      />
      <BottomNavigationAction
        label=""
        value="addbill"
        icon={<Y />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<PeopleIcon />}
      />
      <BottomNavigationAction
        label="Folder"
        value="folder"
        icon={<SettleupIcon />}
      />
    </BottomNavigation>
  );
}
