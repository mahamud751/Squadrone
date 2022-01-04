import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar bg="primary" variant="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <img height="60px" src="http://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/logo-white.png" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home"><Button style={{ textDecoration: 'none', color: 'white' }}>Home</Button></Nav.Link>
                        <Nav.Link as={Link} to="/products"><Button style={{ textDecoration: 'none', color: 'white' }}>Products</Button></Nav.Link>



                        {user.email ?
                            <Box>
                                <NavLink to="/dashboard">
                                    <Button style={{ textDecoration: 'none', color: 'white' }}>Dashboard</Button>
                                </NavLink>

                                <Button style={{ textDecoration: 'none', color: 'white' }}>{user.displayName}</Button>

                                <Button style={{ textDecoration: "none", color: 'white' }} onClick={logOut} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink to="/login">
                                <Button style={{ textDecoration: 'none', color: 'white' }}>Login</Button>
                            </NavLink>

                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;