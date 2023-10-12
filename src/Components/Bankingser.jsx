import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

const Bankingser = () => {
  return (
    <>
    <Container>
    <Row xs="auto" className='pt-4'>
      <Col>
        <div className='banns'>
          <h1 className='fw-bold bann fs-1'>TD Professional Banking Services</h1>
          <p className='mt-4 bann'>We provide secured banking solutions for<br/> your safety and security</p>
        <Link to='/createacct' className='text-decoration-none'>
      <Button 
        type='submit'
        className='fw-bold'
        id='crea'
      >
        OPEN AN ACCOUNT
      </Button>
      </Link>
      </div>
      </Col>

      <Col>
      <Row xs="auto">
        <Col className='border border-start-0 border-top-0'>
          
            <h3>Loans and Savings</h3>
            <p>In need of a business loans? We<br/> can help when you start saving<br/> with us</p>
          
        
        </Col>
        <Col className='border border-end-0 border-top-0'>
          
            <h3>Tax Consulting</h3>
            <p>Self-build capability is<br/> increasingly important  for your<br/> retirement and mortgage</p>
          

        </Col>
      </Row>
      <Row xs="auto">
        <Col className='border border-start-0 border-bottom-0'>
    
            <h3>Investment Planning</h3>
            <p>Besides saving fixed investments<br/> with investing, you have a chance<br/> to earn a better return</p>
          
        
        </Col>
        <Col className='border border-end-0 border-bottom-0'>
         
            <h3>Support and Security</h3>
            <p>We provide unforgetable support<br/> and topnotch security solutions<br/> for all our customers</p>
          

        </Col>
      </Row>
      </Col>
      </Row>
    </Container>
    </>
  )
}

export default Bankingser;



