import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import { login } from '../user/userSlice';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Simulate a login
    dispatch(login({ username: 'user' }));
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField label="Username" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
