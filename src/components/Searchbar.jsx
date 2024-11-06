import { AppBar, InputAdornment, TextField, Toolbar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
const Searchbar = () => {
    return(
        <AppBar position="static">
            <Toolbar>
            <TextField
        variant='outlined'
        placeholder='Search'
        sx={{
            
          width: 250,
          '& .MuiOutlinedInput-root': {
            color:'text.primary',
            backgroundColor:'#fff',
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
    )
}
export default Searchbar;