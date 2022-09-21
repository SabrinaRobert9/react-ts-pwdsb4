import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Buttons(props) {
  return (
    <Container className=" bg-light border border-2 shadow p-3 mb-2 bg-white rounded ">
      <Row style={{ height: 100 }}>
        <Col
          className="d-flex justify-content-start align-items-center gap-1 border border-0"
          style={{ height: 60 }}
        >
          <Button className="bg-secondary">{props.content}</Button>{' '}
          <Button className="bg-primary">{props.content}</Button>{' '}
          <Button className="bg-success">{props.content}</Button>{' '}
          <Button className="bg-danger">{props.content}</Button>{' '}
          <Button className="bg-warning">{props.content}</Button>{' '}
          <Button className="bg-info">{props.content}</Button>{' '}
        </Col>
      </Row>
      <Row>
        <Col
          className="d-flex justify-content-center align-items-center gap-1"
          style={{ height: 50 }}
        >
          <Button className="bg-secondary">{props.content}</Button>{' '}
          <Button className="bg-primary">{props.content}</Button>{' '}
          <Button className="bg-success">{props.content}</Button>{' '}
          <Button className="bg-danger">{props.content}</Button>{' '}
          <Button className="bg-warning">{props.content}</Button>{' '}
          <Button className="bg-info">{props.content}</Button>{' '}
        </Col>
      </Row>
      <Row>
        <Col
          className="d-flex justify-content-end align-items-center"
          style={{ height: 50, color: '#fff "important' }}
        >
          <Button className="border border-2" variant="secondary">
            {props.content}
          </Button>
          <Button className="border border-2" variant="primary">
            {props.content}
          </Button>
          <Button className="border border-2" variant="success">
            {props.content}
          </Button>
          <Button className="border border-2" variant="danger">
            {props.content}
          </Button>

          <Button className="border border-2" variant="warning">
            {props.content}
          </Button>

          <Button className="border border-2" variant="info">
            {props.content}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
