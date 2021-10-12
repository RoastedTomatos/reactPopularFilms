import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ButtonAppBar() {
  return (
    <Box mb="1em" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography mr ="auto" ml ="auto" variant="h6" component="div">
            Popular Movies
          </Typography>
          <Button aria-label="delete" variant="contained" size="large" endIcon={<FavoriteIcon style={{color: '#f44336'}} />}>
            Favorites 
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}