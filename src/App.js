import React, { useState, useEffect } from 'react';
import './App.css';
import {Form, Row, Col, Input, Button, Label, FormGroup} from 'reactstrap';

function App() {

  const [appts, setAppts] = useState([]);
  const [petName, setPetName] = useState("");
  const [owner, setOwner] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");


return (
<div className="pet-appt-form">
<h2 style={{textAlign: 'center'}}>Pet Appointment Form</h2>
<Form>
  <Row form>
    <Col md={6}>
      <FormGroup>
        <Label for="petName">
          Pet Name
        </Label>
        <Input
          id="petName"
          type="text"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label>
          Owner
        </Label>
        <Input
          id="owner"
          type="text"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup>
    <Label for="exampleDate">
      Date
    </Label>
    <Input
      id="exampleDate"
      name="date"
      placeholder="date placeholder"
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleTime">
      Time
    </Label>
    <Input
      id="exampleTime"
      name="time"
      type="time"
      value={time}
      onChange={(e) => setTime(e.target.value)}
    />
  </FormGroup>
  <FormGroup>
    <Label for="number">
      Number
    </Label>
    <Input
      id="number"
      name="number"
      type="number"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
    />
  </FormGroup>
  <FormGroup>
    <Label>
      Email
    </Label>
    <Input
      id="email"
      name="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </FormGroup>
  <Button>
    Sign in
  </Button>
</Form>
</div>
  );
}

export default App;
