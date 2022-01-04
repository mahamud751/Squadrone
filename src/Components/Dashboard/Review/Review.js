<<<<<<< HEAD
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
// import './Review.css'
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

const Review = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://pacific-wave-94058.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('success')
                    reset()
                }
            })
    };
    return (
        <>
            <Box sx={style} className="bookingOrder">
                <Typography id="transition-modal-title" variant="h6" component="h2">

                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            id="outlined-size-small"
                            sx={{ width: "90%", m: 1 }}
                            {...register("name", { required: true, maxLength: 20 })}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            id="outlined-size-small"
                            sx={{ width: "90%", m: 1 }}
                            {...register("email")}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            id="outlined-textarea"
                            sx={{ width: "90%", m: 1 }}
                            {...register("review")}
                            label="Review"
                            placeholder="Say Something"
                            multiline
                        />
                        <TextField
                            id="outlined-textarea"
                            sx={{ width: "90%", m: 1 }}
                            {...register("rating")}
                            label="Rating"
                            placeholder="Rating"
                            multiline
                        />

                        <Button type="submit" variant="contained">Comment</Button>
                    </form>

                </Typography>
            </Box>

        </>
=======
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, InputGroup, FormControl } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [image, setImage] = useState(null);

    const { user } = useAuth();

    // Handle form submit
    const handleReviewSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('rating', rating);
        formData.append('image', image);

        if (rating <= 5 && rating >= 0) {
            fetch('https://pacific-wave-94058.herokuapp.com/reviews', {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(result => {
                    swal("Good job!", "Your Review added successfully done!", "success");
                })
        } else {
            swal("Opps!", "Your Put Invalid Ratings!", "warning");
        }
    }


    return (
        <Container className="my-5">
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <h1 className="dashboard-title">Add A Review</h1>
                    <Form onSubmit={handleReviewSubmit}>
                        <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="name" visuallyHidden>
                                    Your Name
                                </Form.Label>
                                <InputGroup className="w-100 mb-3">
                                    <FormControl
                                        onBlur={e => setName(e.target.value)}
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={user.displayName}
                                        autoComplete="current-name"
                                        placeholder="Enter Your Name"
                                        required
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="description" visuallyHidden>
                                    Review Description
                                </Form.Label>
                                <InputGroup className="w-100 mb-3">
                                    <FormControl
                                        onBlur={e => setDescription(e.target.value)}
                                        type="text"
                                        id="description"
                                        name="description"
                                        autoComplete="current-description"
                                        placeholder="Enter Review Description"
                                        required
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row xs={1} className="mt-2">
                            <Col className="text-start  col-12 col-md-12">
                                <Form.Label htmlFor="rating" visuallyHidden>
                                    Review Rating
                                </Form.Label>
                                <InputGroup className="mb-2 w-100">
                                    <FormControl
                                        onBlur={e => setRating(e.target.value)}
                                        name="rating"
                                        type="text"
                                        autoComplete="current-rating"
                                        id="rating"
                                        placeholder="Enter Review rating"
                                        required
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row xs={1} className="mt-2">
                            <Col className="text-start  col-12 col-md-12">
                                <Form.Label htmlFor="image" visuallyHidden>
                                    Product Image
                                </Form.Label>
                                <InputGroup className="mb-2 w-100">
                                    <FormControl
                                        onBlur={e => setImage(e.target.files[0])}
                                        name="image"
                                        type="file"
                                        id="image"
                                        accept='image/*'
                                        required
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-between">
                            <Button type="submit" className="mt-3 w-50 login-button">
                                Add Review
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>

>>>>>>> main
    );
};

export default Review;