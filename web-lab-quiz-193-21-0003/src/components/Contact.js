import React from "react";
import { ReactDOM } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import contact from '../asstes/images/contact.jpg';

export const Contact = ()=>{
    return(
        <>
            <div className="container mb-5">
                <div className="row">
                    <h1 className="text-center bg-dark text-danger">Lets Connect</h1>
                    <div className="col-sm-12 col-mg-6 col-lg-6">
                        <Form className="border border-secondary p-5 rounded mb-5">
                            <Form.Group className="mb-5" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name please!" defaultValue="Abdullah Hyder Memon"/>
                            </Form.Group>
                            {/* <Form.Group as={Row} className="mb-3" controlId="formPlaintextText">
                                <Form.Label column sm="2">
                                    Name
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" placeholder="Name please!"  defaultValue="Abdullah Hyder Memon" />
                                </Col>
                            </Form.Group> */}
                            <Form.Group className="mb-5" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="someone@gmail.com!" defaultValue="example@gmail.com"/>
                            </Form.Group>
                            {/* <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                Email
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="email" placeholder="someone@gmail.com" defaultValue="example@gmail.com"  />
                                </Col>
                            </Form.Group> */}
                            <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message!</Form.Label>
                                <Form.Control as="textarea" rows={6} />
                            </Form.Group>
                            <button style={{width:"96%",textAlign:"center"}} type="submit" class="btn btn-dark mb-3 ms-2">Submit</button>
                        </Form>
                    </div>
                    <div className="col-sm-12 col-mg-6 col-lg-6">
                        <img src={contact} alt="contact pic" className="rounded img-fluid"/>
                    </div>
                </div>
            
            </div>
        </>
        
    )
}