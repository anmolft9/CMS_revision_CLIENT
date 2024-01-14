import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/footer/Footer";
import { Container } from "react-bootstrap";

///show the spinner
///grab the c and e from the query string parameters
//create and axios function to call the server

//create api end point to receive the code
//check if the combination of the email and the code exist on the user table, if yes then activate the user and send the verification email

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
