import React from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';

const Signup = () => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Signup
        </Typography>
        <TextField label="Username" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <Button variant="contained" color="primary">
          Signup
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
