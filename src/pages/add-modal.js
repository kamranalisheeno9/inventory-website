import React, { useState } from 'react';
import { Button,Modal,Form } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {

  
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Add Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" value={props.name} onChange={(e)=>props.nameChange(e.target.value)} placeholder="Product Name" />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Product Tag</Form.Label>
    <Form.Control type="text" value={props.tag}  onChange={(e)=>props.tagChange(e.target.value)} placeholder="Product Tag" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Detail 1</Form.Label>
    <Form.Control type="text" value={props.detail} onChange={(e)=>props.setdetail(e.target.value)} placeholder="Detail 1" />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Detail 2</Form.Label>
    <Form.Control type="text" value={props.detail2}  onChange={(e)=>props.setdetail2(e.target.value)} placeholder="Detail 2" />
  </Form.Group>

</Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={props.addFunc }>Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
export default MyVerticallyCenteredModal;