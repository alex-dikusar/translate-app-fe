import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchBar from './SearchBar';

function Header() {
  return (
    <AppBar>
      <Toolbar>
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
