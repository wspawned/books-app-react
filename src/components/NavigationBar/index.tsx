import {AppBar, Box, Toolbar, Typography, Button, IconButton, Link} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NAVBAR_ITEMS } from '../../constants';

const NavigationBar = () => {



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {
            NAVBAR_ITEMS.map((item) => {
              return (
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                  <Link href={`${item.route}`} color="inherit" underline="hover" >
                    {`${item.name}`}
                  </Link>
                </Typography>
              )
            })
          }
          
          <Button color="inherit">Login / Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;