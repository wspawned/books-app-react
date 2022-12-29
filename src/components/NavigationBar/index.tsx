import {AppBar, Box, Toolbar, Typography, Button, IconButton, Link} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NAVBAR_ITEMS } from '../../constants';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {

  const navigate = useNavigate();

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
          
          <Button onClick={()=>navigate("/login")} color="inherit">Login / Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;