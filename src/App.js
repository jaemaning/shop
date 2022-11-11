import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import data from './data.js';
import { useState, createContext } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import axios from 'axios';
import Cart from './routes/Cart.js'

export let Context1 = createContext();

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [clicknum, setClicknum] = useState(2);
  let [btncatch, setBtncatch] = useState(false);
  let [loading, setLoading] = useState(false);
  let [재고] = useState([10, 11, 12]);

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>Jaem</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about') }}>Features</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
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
            {
              loading == true ? <div>로 딩 중 . . .</div> : null
            }
            <button onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data' + clicknum + '.json').then((result) => {
                setLoading(true);
                let new_shoes = [...shoes, ...result.data];
                setShoes(new_shoes);
                setClicknum(clicknum + 1);
                setLoading(false);
              })
                .catch(() => {
                  setBtncatch(true);
                  setLoading(false);
                })
            }}>더보기</button>


            {
              btncatch == true ? <div>더이상 상품이 없습니다.</div> : null
            }

          </>
        } />
        <Route path='/detail/:id' element={
          <Context1.Provider value={{ 재고, shoes }}>
            <Detail shoes={shoes} />
          </Context1.Provider>
        } />
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<div>위치정보임</div>} />
        </Route>
        <Route path='/event' element={<Eventpage />}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path='/all' element={<div>404 page error</div>} />
        <Route path='/cart' element={<Cart />}></Route>
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

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Eventpage() {
  return (
    <div>
      <h1>오늘의 이벤트</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
