import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Footer } from "../../components/footer/Footer";
import { Form } from "react-bootstrap";
import { CustomInputField } from "../../components/customInputField/CustomInputField";
import { loginUserAction } from "./userAction";

export const LoginPage = () => {
  // const emailRef = useRef("");
  // const passRef = useRef("");
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // console.log(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(loginUserAction(form));
  };

  return (
    <div>
      <Header />
      <Container className="page-main">
        <div className="form">
          <h3>Welcome, Please Login!</h3>
          <Form onSubmit={handleOnSubmit}>
            <CustomInputField
              onChange={handleOnChange}
              label="email"
              name="email"
              type="email"
              placeholder="Your Email Address"
              required="true"
            />
            <CustomInputField
              onChange={handleOnChange}
              label="password"
              name="password"
              type="password"
              placeholder="Password Please"
              required="true"
            />
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
