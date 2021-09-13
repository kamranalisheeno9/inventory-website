import React, { useState,useCallback } from 'react';
import './login.css'

import { AiOutlineHome,AiOutlinePhone } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { RiLockPasswordLine } from 'react-icons/ri';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Form, Button, InputGroup } from 'react-bootstrap';
import Inventory from '../assets/images/inventory.jpg'
const Login = (props) => {

  const [historyUrl,setHistoryUrl]=useState(false)
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/dashboard'), [history]);

  const [displaySignUp, setDisplaySignUp] = useState(false)
  const [displaySignIn, setDisplaySignIn] = useState(true)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [number, setNumber] = useState("")
  const [address, setAddress] = useState("")
  const [displaySubmit, setDisplaySubmit] = useState(false)
 
  const submitTrue=()=>{
    alert("Successfully Submitted")

      setHistoryUrl(true) 
      setDisplaySignUp(false)
      setDisplaySignIn(true)
      setEmail("")
      setPassword("")
      setNumber("")
      setAddress("")

  }

  const submit=()=>{
    {email == "" || password == "" || number == "" || address == "" ? 
    alert("Please Fill The Form Completely")
    
    :
    submitTrue()
  }
  }

  const signUp = () => {
    setDisplaySignUp(true)
    setDisplaySignIn(false)
    setDisplaySubmit(true)
  }

  const signIn = () => {
    setHistoryUrl(true)
    setDisplaySignUp(false)
    setDisplaySignIn(true)
    handleOnClick()
    props.setDisplay(true)

  }
  return (
    <Router>
    
    <Container fluid className={`${props.display ? "hidden":""}`}  >
      <Row className="main-container">
        <Col >
          <div className="form-container">
            <Form className={`${displaySignIn ? "" : "hidden"}`}>
              <h2 className="login-title">Sign In</h2>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <InputGroup>
                  <Form.Control type="email" className="email-class" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                  <InputGroup.Text id="basic-addon1" className="email-icon"><CgProfile /></InputGroup.Text>

                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <InputGroup>
                  <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="password-class" placeholder="Password" />
                  <InputGroup.Text id="basic-addon1" className="password-icon ">
                    <RiLockPasswordLine />
                  </InputGroup.Text>
                </InputGroup>.
              </Form.Group>
              <div className="btns">
                <Button  variant="warning" onClick={() => signIn()} >
                  Sign In
                </Button>
                <Button variant="warning" onClick={() => signUp()}>
                  Sign Up
                </Button>
              </div>

            </Form>

            <Form className={`${displaySignUp ? "" : "hidden"}`}>
              <h2 className="login-title">Sign Up</h2>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
              <InputGroup>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="email-class" placeholder="Enter Email" />
                  <InputGroup.Text id="basic-addon1" className="email-icon"><CgProfile /></InputGroup.Text>
                </InputGroup> 

              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicPassword">
              <InputGroup>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="password-class" placeholder="Password" />
                  <InputGroup.Text id="basic-addon1" className="email-icon"><RiLockPasswordLine /></InputGroup.Text>
                </InputGroup> 
              
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
              <InputGroup>
                <Form.Control type="text" className="email-class" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Mobile Number" />
                  <InputGroup.Text id="basic-addon1" className="email-icon"><AiOutlinePhone /></InputGroup.Text>
                </InputGroup> 
              

              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicPassword">
              <InputGroup>
                <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="email-class" placeholder="Address" />
                  <InputGroup.Text id="basic-addon1" className="email-icon"><AiOutlineHome /></InputGroup.Text>
                </InputGroup> 
              
              </Form.Group>
              <div className="btns">
              <Button variant="warning" onClick={() => submit()} >
                  Submit
                </Button>
             </div>
              <div className={` btns ${displaySubmit ? "hidden":""}`}>
                <Button variant="warning" onClick={() => signIn()} >
                  Sign In
                </Button>
                <Button variant="warning" onClick={() => signUp()} >
                  Sign Up
                </Button>
              </div>
            </Form>
          </div>
        </Col>
        <Col className="half-image">
          <img src={Inventory}></img>
        </Col>
      </Row>
    </Container>
    </Router>
  );
}

export default Login;