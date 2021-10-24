import Box                                        from '@mui/material/Box';
import Toolbar                                    from '@mui/material/Toolbar';
import FavoriteIcon                               from '@mui/icons-material/Favorite';
import LiveTvIcon                                 from '@mui/icons-material/LiveTv';
import Link                                       from '@mui/material/Link';
import { 
  StyledButton,
  StyledTypography,
  StyledAppBar,
  StyledLogo,
  StyledLink,
}                                                 from '../styles/commonStyledComponents';

export default function ButtonAppBar() {
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
          <StyledLink href="/" underline="hover" variant="h6">
            {'Movies'}
          </StyledLink>
          <StyledLink href="/tv-shows" underline="hover" variant="h6">
            {'TV Shows'}
          </StyledLink>
          <StyledLink href="/news" underline="hover" variant="h6">
            {'News'}
          </StyledLink>
          <StyledButton>
            <Link href="/favorites" underline="none">
              <StyledButton aria-label="delete" size="large"
                endIcon={
                  <FavoriteIcon style={{color: '#f44336'}} />
                }>
                    Favorites
              </StyledButton>
            </Link>
          </StyledButton>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}
