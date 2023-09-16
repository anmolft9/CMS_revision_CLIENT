import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/footer/Footer";
import { Button, Container, Form } from "react-bootstrap";
import { CustomInputField } from "../../components/customInputField/CustomInputField";

export const AdminRegistration = () => {
  return (
    <div>
      <Header />
      <Container className="page-main">
        <div className="form">
          <Form>
            <h1>Admin Registration Form</h1>
            <hr />
            <CustomInputField
              label="Email address"
              type="email"
              placeholder="Enter your email address"
            />
            <CustomInputField
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <CustomInputField />
            <CustomInputField />
            <CustomInputField />
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
