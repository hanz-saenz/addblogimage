// src/components/Perfil.js
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';
import NavBar from '../NavBar';

const Perfil = () => {
  const [user, setUser] = useState({
    avatar: '',
    firstName: 'admin',
    lastName: 'admin',
    address: '',
    phone: '',
    description: ''
  });

  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleAvatarChange = (e) => {
    if (e.target.files.length > 0) {
      const file = URL.createObjectURL(e.target.files[0]);
      setUser({
        ...user,
        avatar: file,
      });
    }
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <>
      <NavBar />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Este es mi perfil
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IconButton color="primary" component="label">
            <Avatar src={user.avatar} sx={{ width: 56, height: 56 }} />
            {isEditing && (
              <>
                <input hidden accept="image/*" type="file" onChange={handleAvatarChange} />
                <PhotoCamera />
              </>
            )}
          </IconButton>
          {isEditing ? (
            <>
              <TextField
                margin="normal"
                fullWidth
                label="Nombre"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Apellido"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Dirección"
                name="address"
                value={user.address}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Teléfono"
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Descripción"
                name="description"
                value={user.description}
                onChange={handleChange}
                multiline
                rows={4}
              />
              <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSave}>
                Guardar
              </Button>
            </>
          ) : (
            <>
              <Typography variant="h5" component="h2">
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant="body1">
                <strong>Dirección:</strong> {user.address}
              </Typography>
              <Typography variant="body1">
                <strong>Teléfono:</strong> {user.phone}
              </Typography>
              <Typography variant="body1">
                <strong>Descripción:</strong> {user.description}
              </Typography>
              <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleEdit}>
                Editar
              </Button>
            </>
          )}
        </Box>
      </Container>
    </>
  );
}

export default Perfil;
