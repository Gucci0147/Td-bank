import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className='bg-success py-3'>
        <Container fluid>
      
        </Container>
      </Navbar>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
         <Navbar.Brand>
          <Link to='/' className=''>
            <img
              alt="Td-bank"
              src="https://logos-world.net/wp-content/uploads/2021/03/TD-Bank-Logo.png"
              width="100"
              height="50"
              className="d-inline-block align-top"
            />
          </Link>
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <Link to='/login' className='text-decoration-none outline-none'>
              <Button 
                type="submit" 
                className="text-white bg-warning border-0 p-2 ms-4 fw-bold">Login</Button>
            </Link>
          </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className=""/>
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav
            className=''
            style={{ maxHeight: '400px' }}
          >

            <Link to='/createacct'className='text-decoration-none p-2 ms-5 text-black fw-bold'>Create Account</Link>
            <Link to='/personalbanking'className='text-decoration-none p-2 text-success fw-bold'>Personal banking</Link>
            <Link to='/contacts'className='text-decoration-none p-2 text-black fw-bold'>Contact support</Link>
            <Link to='/business'className='text-decoration-none p-2 text-black fw-bold'>Business</Link>
            <Link to='/premier'className='text-decoration-none p-2 text-black fw-bold'>Premier</Link>
            <Link to='/'className='text-decoration-none p-2 text-black fw-bold'>Home</Link>
            
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header;