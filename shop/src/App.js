/* eslint-disable */
import logo from './logo.svg';
import { Navbar, Container , Nav , NavDropdown , Button } from 'react-bootstrap';
import './App.css';
import React, {useContext, useState } from 'react';
import Data from './data.js'
import Detail from './Detail.js'
import axios from 'axios';
import { Link, Route, Switch , useHistory} from 'react-router-dom';

import Cart from './Cart.js';

export let 재고context = React.createContext();

function App() {

  let [shoes, shoes변경] = useState(Data);
  let [재고,재고변경] = useState([10,11,12]);

  return (
    <div className="App">

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to= "/">Home</Nav.Link>
        <Nav.Link as={Link} to= "Detail/0">Detail</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


<Switch>

<Route exact path="/">

<div className="main">
  <h1>20% Season Off</h1>
   <p>This  is a simple hero nuit, a simple jumbotron-style component for calling
      extra attention to featured content or information.</p>
      <Button variant="primary">Learn more</Button>{' '}
</div>

< div className="container">

    <재고context.Provider value={재고}>

    <div className="row">
      {
        shoes.map((a,i) => {
          return <Card shoes={shoes[i]} i={i} key={i} />

        })
      }
    </div>

    </재고context.Provider>

      <button className="btn btn-primary" onClick={()=>{

        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=>{
          console.log(result.data);
          shoes변경(  [...shoes, ...result.data]  );
        })        


        .catch(()=>{
          console.log('실패했어요');
        })

      }}>더보기</button>
  </div>

</Route>


<Route path="/detail/:id">

<재고context.Provider value={재고}>
   <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
</재고context.Provider>

</Route>

<Route path="/cart">
    <Cart></Cart>
</Route> 

<Route path="/detail/0">
      <div>아무거나 적었을때 보여주세요</div>
</Route>

</Switch>

</div>
  );
}

function Card(props){

  let 재고 = useContext(재고context);
  let history = useHistory();

  return(
    <div className="col-md-4" onClick={()=>{ history.push('/Detail/' + props.shoes.id) }}>
      <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg' } width="100%"/>
        <h4>{ props.shoes.title }</h4>
        <p>{ props.shoes.content }<br></br>{ props.shoes.price }</p>
        <p>재고:{재고[props.i]}</p>
      </div>
  )
}

export default App;
