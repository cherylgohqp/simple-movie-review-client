import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ReviewForm = ({handleSubmit,revText,labelText}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

    return (
  
      <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>{labelText}</Form.Label>
              <Form.Control ref={revText} as="textarea" rows={3}  value={inputValue}
          onChange={handleInputChange} placeholder='Write your review here!' />
          </Form.Group>
          <Button variant="outline-info" onClick={handleSubmit} disabled={inputValue.trim() === ''}>Submit</Button>
      </Form>
  
    )
  }

  export default ReviewForm;
