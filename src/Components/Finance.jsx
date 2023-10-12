import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import Banklog from '../TD IMAGES/banklog.png'
import { Link } from 'react-router-dom'

const Finance = () => {
  return (
    <>
      <Container>
      <Row xs="auto" className='pt-4'>
        <Col>
        <img src={Banklog} alt="" />
        
        </Col>

        <Col className='m-4 pb-4'>
          <h3 className=''>PERSONAL FINANCE SERVICES</h3>
          <p className=''>Most of our online content and services are<br/> available in English. We do have English<br/> content to get you started and are<br/> continuously striving to improve the online<br/> experience for our international customers.</p>
          <h3 className=''>Simplicity</h3>
          <p className=''>Our process is simple. We’ll move over your<br/> Direct Debits and cover all those tricky admin bits</p>

          <Link to='/createacct' className='text-decoration-none'>
            <Button 
              type='submit'
              className='fw-bold bg-success'
            >
              CONTACT US
            </Button>
          </Link>

        </Col>
      </Row>
      </Container>
    </>
  )
}

export default Finance