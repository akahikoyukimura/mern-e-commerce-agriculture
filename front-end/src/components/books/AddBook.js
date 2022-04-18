import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useDispatch} from "react-redux";
import {addBook} from "../../store/actions/bookActions"

function AddBook() {

    const dispatch=useDispatch();
    const [book,setBook]=useState({
        title:"",
        image:"",
        category:"",
        price:"",
        author:"",
        description:""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBook(book));
        console.log(book);
        setBook({
            title:"",
            image:"",
        category:"",
        price:"",
        author:"",
        description:""
        })
    }

  return (
    <Form onSubmit = { handleSubmit }>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" 
        onChange = {(e) => setBook({...book, title: e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder="Enter image" 
        onChange = {(e) => setBook({...book, image: e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCategory">
        <Form.Label>category</Form.Label>
        <Form.Control type="text" placeholder="category" 
        onChange = {(e) => setBook({...book, category: e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>price</Form.Label>
        <Form.Control type="number" placeholder="price" 
        onChange = {(e) => setBook({...book, price: e.target.value})}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAuthor">
        <Form.Label>author</Form.Label>
        <Form.Control type="text" placeholder="author" 
        onChange = {(e) => setBook({...book, author: e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" placeholder="description" 
        onChange = {(e) => setBook({...book, description: e.target.value})}  />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddBook;
