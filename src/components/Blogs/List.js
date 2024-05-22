import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const initialBlogs = [
  { id: 1, title: 'Blog 1', content: 'Contenido del Blog 1', imageUrl: 'https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg' },
  { id: 2, title: 'Blog 2', content: 'Contenido del Blog 2', imageUrl: 'https://c8.alamy.com/compes/2najwc9/texto-nuevo-blog-escrito-en-espiral-bloc-de-notas-en-la-mesa-con-maquina-de-escribir-y-taza-de-cafe-blogging-y-concepto-de-periodismo-2najwc9.jpg' },
  { id: 3, title: 'Blog 3', content: 'Contenido del Blog 3', imageUrl: 'https://c8.alamy.com/compes/2nnrxp9/vista-superior-de-la-palabra-blog-en-espiral-bloc-de-notas-en-blanco-rustico-escritorio-con-ordenador-portatil-y-maceta-2nnrxp9.jpg' },
  { id: 4, title: 'Blog 4', content: 'Contenido del Blog 4', imageUrl: 'https://img.freepik.com/fotos-premium/blog-escrito-blogger-concepto-negocio-linea-oficina-computadora-internet_770123-3674.jpg' },
  { id: 5, title: 'Blog 5', content: 'Contenido del Blog 5', imageUrl: 'https://www.shutterstock.com/image-photo/blog-notes-about-blogconcept-260nw-720876373.jpg' },
];

const BlogList = () => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedBlogToShow, setSelectedBlogToShow] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const [editedImageUrl, setEditedImageUrl] = useState('');
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogContent, setNewBlogContent] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setEditedTitle(blog.title);
    setEditedContent(blog.content);
    setEditedImageUrl(blog.imageUrl);
    setOpenDialog(true);
  };

  const handleView = (blog) => {
    setSelectedBlogToShow(blog);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSelectedBlog(null);
    setSelectedBlogToShow(null);
    setOpenDialog(false);
  };

  const handleSave = () => {
    const updatedBlogs = blogs.map(blog =>
      blog.id === selectedBlog.id ? { ...blog, title: editedTitle, content: editedContent, imageUrl: editedImageUrl } : blog
    );
    setBlogs(updatedBlogs);
    setSelectedBlog(null);
    setOpenDialog(false);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const handleAddBlog = () => {
    const newId = blogs.length + 1;
    const newBlog = { id: newId, title: newBlogTitle, content: newBlogContent, imageUrl: newImageUrl };
    setBlogs([...blogs, newBlog]);
    setNewBlogTitle('');
    setNewBlogContent('');
    setNewImageUrl('');
  };

  return (
    <>
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Bienvenido a la lista de Blogs
        </Typography>
        <IconButton
          onClick={() => setOpenDialog(true)}
          aria-label="Agregar"
        >
          <AddIcon />Agregar
        </IconButton>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Título</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {blogs.map((blog) => (
                <TableRow key={blog.id}>
                  <TableCell>{blog.id}</TableCell>
                  <TableCell>{blog.title}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleEdit(blog)}
                      aria-label="Editar"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDelete(blog.id)}
                      aria-label="Eliminar"
                    >
                      <DeleteIcon />
                    </IconButton>
                    <Button onClick={() => handleView(blog)}>Ver</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>{selectedBlogToShow ? selectedBlogToShow.title : selectedBlog ? selectedBlog.title : ''}</DialogTitle>
          <DialogContent>
            {selectedBlogToShow ? (
              <>
                <img src={selectedBlogToShow.imageUrl} alt="Blog" />
                <Typography>{selectedBlogToShow.content}</Typography>
              </>
            ) : selectedBlog ? (
              <>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Título"
                  name="titulo"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="URL de la imagen"
                  name="imageUrl"
                  value={editedImageUrl}
                  onChange={(e) => setEditedImageUrl(e.target.value)}
                />
                {editedImageUrl && <img src={editedImageUrl} alt="Preview" style={{ maxWidth: '100%', marginTop: 10 }} />}
                <TextField
                  margin="normal"
                  fullWidth
                  label="Contenido"
                  name="contenido"
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  multiline
                  rows={4}
                />
              </>
            ) : (
              <>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Título"
                  name="titulo"
                  value={newBlogTitle}
                  onChange={(e) => setNewBlogTitle(e.target.value)}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="URL de la imagen"
                  name="imageUrl"
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                />
                {newImageUrl && <img src={newImageUrl} alt="Preview" style={{ maxWidth: '100%', marginTop: 10 }} />}
                <TextField
                  margin="normal"
                  fullWidth
                  label="Contenido"
                  name="contenido"
                  value={newBlogContent}
                  onChange={(e) => setNewBlogContent(e.target.value)}
                  multiline
                  rows={4}
                />
              </>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cerrar</Button>
            {selectedBlog ? (
              <Button onClick={handleSave}>Guardar</Button>
            ) : (
              <Button onClick={handleAddBlog}>Agregar</Button>
            )}
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};

export default BlogList;
