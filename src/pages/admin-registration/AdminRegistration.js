import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/footer/Footer";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { CustomInputField } from "../../components/customInputField/CustomInputField.js";

export const AdminRegistration = () => {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({
    message: "test",
    status: "error",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

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
          <Form onSubmit={handleOnSubmit}>
            <h1>Admin Registration Form</h1>
            {response.message && (
              <Alert
                variant={response.status === "success" ? "success" : "danger"}
              >
                {response.message}
              </Alert>
            )}
            <hr />

            {fields.map((item, i) => (
              <CustomInputField onChange={handleOnChange} key={i} {...item} />
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
