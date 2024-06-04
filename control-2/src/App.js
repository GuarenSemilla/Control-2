import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Form, Row, Col, Button, Container } from 'react-bootstrap'
import Home from './Home/Home';
import About from './Home/About';
import Sandia from './Home/Sandia';
import ListaFactos from './Home/ListaFactos';
import Header from './Componente/Header';
import './App.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header titulo="chuk nurri pagina oficial"/>
        <Container>
          <Row>
            <Col><Link to="/">Home</Link></Col>
            <Col><Link to="/about">About</Link></Col>
            <Col><Link to="/Sandia">Sandia</Link></Col>
            <Col><Link to="/ListaFactos">ListaFactos</Link></Col>
          </Row>
        </Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Sandia" element={<Sandia />} />
          <Route path="/ListaFactos" element={<ListaFactos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;