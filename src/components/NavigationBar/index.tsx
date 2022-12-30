import {AppBar, Box, Toolbar, Typography, Button, IconButton, Link} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NAVBAR_ITEMS } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { resetActiveUser } from '../../redux/slices/usersSlice';
import { toogleSideMenu } from '../../redux/slices/generalSlice';

const NavigationBar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const activeUser = useAppSelector((state) => state.users.activeUser);

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
            onClick={() => dispatch(toogleSideMenu())}
          >
            <MenuIcon />
          </IconButton>
          {NAVBAR_ITEMS.map((item) => {
            return (
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link
                  onClick={() => {
                    navigate(`${item.route}`);
                  }}
                  color="inherit"
                  underline="hover"
                >
                  {`${item.name}`}
                </Link>
              </Typography>
            );
          })}

          {activeUser.isAdmin && (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                onClick={() => navigate("/admin")}
                color="inherit"
                underline="hover"
              >
                {`ADMIN PANEL`}
              </Link>
            </Typography>
          )}

          {activeUser.username ? (
            <Button
              onClick={() => {
                dispatch(resetActiveUser());
              }}
              color="inherit"
            >
              Logout
            </Button>
          ) : (
            <Button onClick={() => navigate("/login")} color="inherit">
              Login / Sign Up
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;