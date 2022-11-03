import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';

function App() {
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

      <Container>
        <Row>
          <Col md={4}>
            <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="80%"></img>
            <h4>상품명1</h4>
            <p>상품설명1</p>
          </Col>
          <Col md={4}>
            <img src='https://codingapple1.github.io/shop/shoes2.jpg' width="80%"></img>
            <h4>상품명2</h4>
            <p>상품설명2</p>
          </Col>
          <Col md={4}>
            <img src='https://codingapple1.github.io/shop/shoes3.jpg' width="80%"></img>
            <h4>상품명3</h4>
            <p>상품설명3</p>
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;
