import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../components/footer/Footer";
import { Form } from "react-bootstrap";
import { CustomInputField } from "../../components/customInputField/CustomInputField";
import { loginUserAction } from "./userAction";
import { useLocation, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({});

  const { user } = useSelector((state) => state.admin);

  const origin =
    (location.state && location.state.from && location.state.from.pathname) ||
    "/dashboard";

  useEffect(() => {
    user._id && navigate(origin);
  }, [user, navigate]); ///dependencies

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUserAction(form)); //dispatching the value of form to the global state handled by redux
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
              placeholder="Password"
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
