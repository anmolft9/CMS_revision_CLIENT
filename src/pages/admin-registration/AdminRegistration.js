import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/footer/Footer";
import { Button, Container, Form } from "react-bootstrap";

export const AdminRegistration = () => {
  return (
    <div>
      <Header />
      <Container className="page-main">
        <div className="form">
          <Form>
            <h1>Admin Registration Form</h1>
            <hr />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
