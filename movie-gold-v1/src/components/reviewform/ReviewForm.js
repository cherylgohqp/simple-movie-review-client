import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./ReviewForm.css";

const ReviewForm = ({handleSubmit,revText,labelText}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (revText.current) {
      revText.current.value = e.target.value;
    }
  };

  const onSubmit =(e)=>{
    e.preventDefault();
    handleSubmit(e);
    setInputValue('');
    if (revText.current) {
      revText.current.value = '';
    }
  }

    return (
  
      <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>{labelText}</Form.Label>
              <Form.Control ref={revText} as="textarea" rows={3}  value={inputValue}
          onChange={handleInputChange} placeholder='Write your review here!' />
          </Form.Group>
          <Button variant="outline-info" className='review-submit-btn' onClick={onSubmit} disabled={inputValue.trim() === ''}>Submit</Button>
      </Form>
  
    )
  }

  export default ReviewForm;
