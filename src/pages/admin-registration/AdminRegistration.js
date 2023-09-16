import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/footer/Footer";
import { Button, Container, Form } from "react-bootstrap";
import { CustomInputField } from "../../components/customInputField/CustomInputField";

export const AdminRegistration = () => {
  const fields = [
    {
      label: "First name",
      name: "Fname",
      type: "text",
      placeholder: "Anmol",
      required: true,
    },
    {
      label: "Last name",
      name: "Lname",
      type: "text",
      placeholder: "Bhattarai",
      required: true,
    },
  ];

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
