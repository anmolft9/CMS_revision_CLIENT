import React from "react";
import { Header } from "../../components/Header/Header";
import { Button, Container } from "react-bootstrap";
import { Footer } from "../../components/footer/Footer";
import { Form } from "react-bootstrap";
import { CustomInputField } from "../../components/customInputField/CustomInputField";

export const LoginPage = () => {
  return (
    <div>
      <Header />
      <Container className="page-main">
        <div className="form">
          <Form>
            <CustomInputField />
            <CustomInputField />
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
