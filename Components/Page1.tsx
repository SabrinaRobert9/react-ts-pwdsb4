import * as React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardExample() {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src="https://cdn.autopapo.com.br/carro/bmw/i8-15-hybrid-2015/destaque-v1.png"
        />
        <Card.Body></Card.Body>
      </Card>
    </div>
  );
}
