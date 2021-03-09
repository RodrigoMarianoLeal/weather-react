import React from 'react';
import { Card, Container } from 'react-bootstrap';
import '../WheatherForm/formulario.css'
export default function index({ title, children }) {
  return (
    <Container className="mt-4 cardalign w-50 text-center" >
    <Card className="cont" >
    <Card.Title>{title}</Card.Title>
      <Card.Body>
        {children}
      </Card.Body>
    </Card>
    </Container>
  );
}