import React from 'react'
import { Form, Button } from 'react-bootstrap';

const AddForm = () => {
  return (
    <Form>
    <Form.Group className="mb-3">
      <Form.Control type="text" placeholder="Enter task..." />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default AddForm;