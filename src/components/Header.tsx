import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchBar from './SearchBar';
import { useGetSearchResultQuery } from '../api';

function Header() {
  const [searchStr, setSearchStr] = useState<string>();
  useGetSearchResultQuery(searchStr, { skip: !searchStr });

  return (
    <AppBar>
      <Toolbar>
        <SearchBar onChange={setSearchStr} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
