import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to MyApp!
      </Typography>
      <Typography variant="body1">
        This is the home page. Explore our features and services.
      </Typography>
    </Container>
  );
};

export default Home;
