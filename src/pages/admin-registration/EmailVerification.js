import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/footer/Footer";
import { Card, Container, Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

///show the spinner
///grab the c and e from the query string parameters
//create  axios function to call the server and vice versa

//create api end point to receive the code
//check if the combination of the email and the code exist on the user table, if yes then activate the user and send the verified confirmation message or to the home page

const EmailVerification = () => {
  const [queryParams] = useSearchParams();
  const [isPending, setIsPending] = useState(true);
  return (
    <div>
      <Header />
      <Container className="page-main">
        {isPending && (
          <Card className="mt-5 p-2 m-auto" style={{ width: "20rem" }}>
            <Spinner
              className="mt-3 p-2 m-auto "
              variant="success"
              animation="border"
            ></Spinner>
            <h5>Email verification is pending, please wait...</h5>
          </Card>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default EmailVerification;
