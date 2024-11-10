import { AppBar, InputAdornment, TextField, Toolbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Searchbar = () => {
  const [searchWord, setSearchWord] = useState('');
  const dispatch = useDispatch();
  const handleSearchChange = e => {
    setSearchWord(e.target.value);
  };

  return (
    <AppBar position='static'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          onChange={handleSearchChange}
          variant='outlined'
          placeholder='Search'
          sx={{
            width: 250,
            '& .MuiOutlinedInput-root': {
              color: 'text.primary',
              backgroundColor: '#fff',
              fontWeight: 'bold',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#2e2e2e',
                borderWidth: '2px',
              },
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
      </Toolbar>
    </AppBar>
  );
};
export default Searchbar;
