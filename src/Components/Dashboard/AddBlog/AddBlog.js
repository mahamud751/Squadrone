import React, { useState } from 'react';
import { Button, Container, Grid, TextField } from '@mui/material';
import swal from 'sweetalert';

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    // Handle Product submit
    const handleProductSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('author', author);
        formData.append('image', image);


        fetch('https://pacific-wave-94058.herokuapp.com/products', {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                swal("Good job!", "Your product added successfully done!", "success");
            })
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <form onSubmit={handleProductSubmit}>
                        <TextField
                            sx={{ width: "50%", my: 1 }}
                            label="Title"
                            id="outlined-size-small"
                            type='text'
                            name='title'
                            onBlur={e => setTitle(e.target.value)}
                            required
                            size="small"
                        /> <br />
                        <TextField
                            sx={{ width: "50%", my: 1 }}
                            label="Description"
                            id="outlined-size-small"
                            type='text'
                            name='description'
                            onBlur={e => setDescription(e.target.value)}
                            required
                            size="small"
                        /> <br />
                        <TextField
                            sx={{ width: "50%", my: 1 }}
                            label="Author Name"
                            id="outlined-size-small"
                            type='text'
                            name='author'
                            onBlur={e => setAuthor(e.target.value)}
                            required
                            size="small"
                        />
                        <br />
                        <TextField
                            sx={{ width: "50%", my: 1 }}
                            id="outlined-size-small"
                            type='file'
                            name='image'
                            accept='image/*'
                            onBlur={e => setImage(e.target.files[0])}
                            required
                            size="small"
                        />
                        <br />
                        <Button sx={{ width: '50%', py: 1.5 }} type='submit' variant="contained">Add Blog</Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddBlog;