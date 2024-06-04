import { Form, Row, Col, Button, Container } from 'react-bootstrap'
import React from 'react';

function Home() {
  return (
    <Container>
      <>
      <img
        className="avatar"
        src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
        style={{
          width: 400,
          height: 200
        }}
      />
    </>
    <Row>
      <Col>pagina fan de chucknurri</Col>
    </Row>
  </Container>
  );
}

export default Home;