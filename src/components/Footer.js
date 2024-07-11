import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box mt={5} py={3} textAlign="center" bgcolor="lightgray">
      <Typography variant="body1">© 2024 MyApp. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
