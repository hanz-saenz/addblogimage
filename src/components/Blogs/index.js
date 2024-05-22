// src/components/Initial.js
import React from 'react';
import Container from '@mui/material/Container';
import NavBar from '../NavBar';
import BlogList from './List';

const Blogs = () => {
  return (
    <>
      <NavBar />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <BlogList />
      </Container>
    </>
  );
}

export default Blogs;
