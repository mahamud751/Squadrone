import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Pages/Footer/Footer';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://pacific-wave-94058.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <>
            <Navigation></Navigation>
            <Container className='my-5'>
                <h3 className="text-center mt-4">Our Blogs</h3>
                <p className="text-center mb-4">Upadte News of Drone.</p>
                <Row>
                    {
                        blogs.map(blog => <Col sm={12} md={4} key={blog._id} >
                            <div className='blog-image' >
                                <img src={`data:image/png;base64,${blog.image}`} className='img-fluid' alt="" />
                            </div>
                            <div className='p-2'>
                                <p className="text-muted fw-bold">Author- {blog.author}</p>
                                <h4 style={{ fontFamily: "Roboto", fontSize: "1.3em" }}>{blog.title}</h4>
                                <p className='review-text text-dark'>{blog.description} <Link to="">read more</Link></p>

                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Blogs;