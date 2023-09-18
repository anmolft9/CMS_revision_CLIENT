import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/footer/Footer";
import { Button, Container, Form } from "react-bootstrap";
import { CustomInputField } from "../../components/customInputField/CustomInputField.js";

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
    {
      label: "Email address",
      name: "email",
      type: "email",
      placeholder: "Your @email.com",
      required: true,
    },
    {
      label: "Phone Number",
      name: "phone",
      type: "number",
      placeholder: "Your phone number please",
      required: true,
    },
    {
      label: "Date of Birth",
      name: "DOB",
      type: "date",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "Your Address",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Retype password",
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

            {fields.map((item, i) => (
              <CustomInputField key={i} {...item} />
            ))}

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
