import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginFinal from './Login'
import axios from 'axios'


const initialState = {
  showLoginForm: false,
  isLoggedIn: false,  // Add a flag to track login state
};

const backgroundImage = "https://i.pinimg.com/564x/62/c2/eb/62c2ebd925e49c8b55a9435ffbec6cd2.jpg";

export default function Mainpage() {
  const [state, setState] = React.useState(initialState);

  const handleLoginClick = () => {
    setState({ ...state, showLoginForm: true });
  };

  // Implement login logic here (using axios or a dedicated authentication library)
  const handleLogin = async (credentials) => {
    try {
      const response = await axios.post('/api/login', credentials);  // Adjust URL as needed
      if (response.data.success) {
        setState({ ...state, showLoginForm: false, isLoggedIn: true });
      } else {
        // Handle login error (e.g., display an error message)
        console.error('Login failed:', response.data.error);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundImage: url(${backgroundImage}), backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ background: '#9F3193' }}>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            ART GALLERY
          </Typography>
          {!state.isLoggedIn && (  // Only show Login button if not logged in
            <Button color="inherit" onClick={handleLoginClick}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {state.showLoginForm && <LoginFinal onLogin={handleLogin} />}  
    </Box>
  );
}
