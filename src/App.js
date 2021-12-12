import React, { useState, useEffect } from 'react';
import './App.css';
import {Card, CardBody, Form, Row, Col, Input, Button, Label, FormGroup, ListGroup, ListGroupItem} from 'reactstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { BsFillPenFill, BsFillArrowDownCircleFill } from 'react-icons/bs';


function App() {

  const [appts, setAppts] = useState([]);
  const [petName, setPetName] = useState("");
  const [owner, setOwner] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [isValid, setIsValid] = useState(false);

  const addFilledFormHandler = () => {
    const oldAppts = [...appts];
    const newAppt = {
      petName,
      owner,
      date,
      time,
      phoneNumber,
      email,
      id:Math.floor(Math.random()*1000)
    }

    const newAppts = oldAppts.concat(newAppt);

    if (petName === "" || owner === "" || date === "" || time === "" || phoneNumber === "" || email === "") {
      alert('Fields cannot be blank!');
      setIsValid(true);
    } else {
      const newAppts = oldAppts.concat(newAppt);
      setIsValid(false);
    }

    setAppts(newAppts);

    localStorage.setItem("appts", JSON.stringify(newAppts));

    setPetName("");
    setOwner("");
    setDate("");
    setTime("");
    setPhoneNumber("");
    setEmail("");
  }

  const deleteApptHandler = (id) => {
    const oldAppts = [...appts];
    const newAppts = oldAppts.filter((appt) => appt.id !== id);
    setAppts(newAppts);
  }

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
          error={isValid}
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
          error={isValid}
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
      error={isValid}
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
      error={isValid}
    />
  </FormGroup>
  <FormGroup>
    <Label for="number">
      Number
    </Label>
    <Input
      id="exampleNumber"
      name="number"
      type="phone"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
      error={isValid}
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
      error={isValid}
    />
  </FormGroup>
  <Button onClick={addFilledFormHandler}>
    Save Appointment
  </Button>
</Form>

 <Card>
    <CardBody>
      {appts.map((appt, index) => (
        <ListGroup key={index} className="appt-data-list">
          <div className="icons">
          <BsFillPenFill />
          <FaTrashAlt onClick={() => deleteApptHandler(appt.id)}/>
          </div>
          <ListGroupItem>
             {appt.petName}
          </ListGroupItem>
          <ListGroupItem>
             {appt.owner}
          </ListGroupItem>
          <ListGroupItem>
             {appt.date}
          </ListGroupItem>
          <ListGroupItem>
             {appt.time}
          </ListGroupItem>
          <ListGroupItem>
             {appt.phoneNumber}
          </ListGroupItem>
          <ListGroupItem>
             {appt.email}
         </ListGroupItem>
         <div className="icon-show-details">
           <BsFillArrowDownCircleFill />
         </div>
        </ListGroup>  
      ))}
    </CardBody>
  </Card>

</div>
  );
}

export default App;
