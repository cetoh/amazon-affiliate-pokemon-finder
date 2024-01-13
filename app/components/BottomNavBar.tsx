'use client'
import React from 'react'
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const BottomNavBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ bgcolor: 'black'}}
        >
        <BottomNavigationAction label="Home" href="/"/>
        {/* <BottomNavigationAction label="Favorites" />
        <BottomNavigationAction label="Nearby" /> */}
      </BottomNavigation>
    </div>
  )
}

export default BottomNavBar