import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap'
import Home from './Home/Home';
import FactoRandom from './Home/FactoRandom';
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
            <Col><Link to="/FactoRandom">FactoRandom</Link></Col>
            <Col><Link to="/ListaFactos">ListaFactos</Link></Col>
          </Row>
        </Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FactoRandom" element={<FactoRandom />} />
          <Route path="/ListaFactos" element={<ListaFactos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;