import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/footer/Footer";
import { Container } from "react-bootstrap";

const EmailVerification = () => {
  return (
    <div>
      <Header />
      <Container className="page-main">
        <h2>EmailVerification</h2>
      </Container>
      <Footer />
    </div>
  );
};

export default EmailVerification;
