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
    } else {
      const newAppts = oldAppts.concat(newAppt);
    }

    setAppts(newAppts);

    setPetName("");
    setOwner("");
    setDate("");
    setTime("");
    setPhoneNumber("");
    setEmail("");
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
      id="exampleNumber"
      name="number"
      type="phone"
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
  <Button onClick={addFilledFormHandler}>
    Save Appointment
  </Button>
</Form>

 <Card>
    <CardBody>
      {appts.map((appt, id) => (
        <ListGroup key={id} className="appt-data-list">
          <div className="icons">
          <BsFillPenFill />
          <FaTrashAlt />
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
