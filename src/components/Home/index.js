// src/components/Initial.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const Initial = () => {
  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        Bienvenido
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {'a la implementación'}
        {'de tu primer Login'}
      </Typography>
      <Button component={Link} to="/" variant="outlined">
        Volver
      </Button>
    </Container>
  );
}

export default Initial;
