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
          Add Item
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Item</Form.Label>
    <Form.Control type="text" value={props.item} onChange={(e)=>props.addItem(e.target.value)} placeholder="Item" />
  
  </Form.Group>


</Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={props.addItemFunction }>Add Item</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
export default MyVerticallyCenteredModal;