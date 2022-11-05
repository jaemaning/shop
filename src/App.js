import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import data from './data.js';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Detail from './routes/Detail.js'

function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Jaem</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-big'></div>


      <Routes>
        <Route path='/' element={
          <>
            <Container>
              <Row>
                {
                  shoes.map(function (a, i) {
                    return (
                      <Card shoes={shoes[i]} i={i + 1}></Card>
                    )
                  })
                }
              </Row>
            </Container>
          </>
        } />
        <Route path='/detail' element={<Detail />} />
        <Route path='/about' element={<div>about 페이지임</div>} />
      </Routes>

    </div >
  );
}

function Card(props) {
  return (
    <Col md={4}>
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%"></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price} 원</p>
    </Col>
  )
}

export default App;
