import React                                      from 'react';
import Box                                        from '@mui/material/Box';
import Toolbar                                    from '@mui/material/Toolbar';
import FavoriteIcon                               from '@mui/icons-material/Favorite';
import LiveTvIcon                                 from '@mui/icons-material/LiveTv';
import { useHistory }                             from 'react-router-dom';
import { 
  StyledButton,
  StyledTypography,
  StyledAppBar,
  StyledLogo,
  StyledLink,
}                                                 from '../styles/styledComponents';

export default function ButtonAppBar() {
  const history = useHistory();

  const moveToFavorites = (): any => {
    console.log('ping ok');
    history.push('/favorites');
  }

  return (
    <Box mb="1em" display="flex">
      <StyledAppBar>
        <Toolbar>
          <StyledLogo>
            <LiveTvIcon fontSize="large"/>
            <StyledTypography variant="h6">
              PopularMoviesProject
            </StyledTypography>
          </StyledLogo>
          <StyledLink href="#" underline="hover" variant="h6">
            {'Movies'}
          </StyledLink>
          <StyledButton aria-label="delete" size="large"
            onClick={moveToFavorites} endIcon={
              <FavoriteIcon style={{color: '#f44336'}} />
            }>
                Favorites
          </StyledButton>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}
