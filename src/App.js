import './App.css';
import {Form, Row, Col, Input, Button, Label, FormGroup} from 'reactstrap';

function App() {
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
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleTime">
      Time
    </Label>
    <Input
      id="exampleTime"
      name="time"
      placeholder="time placeholder"
      type="time"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleNumber">
      Number
    </Label>
    <Input
      id="exampleNumber"
      name="number"
      placeholder="number placeholder"
      type="number"
    />
  </FormGroup>
  <FormGroup>
    <Label>
      Email
    </Label>
    <Input
      id="exampleAddress"
      name="address"
      placeholder="1234 Main St"
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
