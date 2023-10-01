import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../styles/loginStyles.css';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import HTTP from '../utils/http';


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  function handleToggleShowPassword() {
    setShowPassword(!showPassword);
  }

  const handleChange = (e) => {
    setUsername(e.target.value); // Update the username state with the new value
  };

  const createSession = async (e) => {
    e.preventDefault(); // Prevents the page from reloading

    try {
      const response = await HTTP({
        url: `/users/${process.env.REACT_APP_USER_ID}`,
      });

      console.log(response.data);
      if (response?.data?.["_id"]) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col sm="12" md="8" className="p-0 d-flex">
          <img
            className="w-100"
            src="https://www.chcfl.org/wp-content/uploads/2015/12/American-Cancer-Society.jpg"
          />
        </Col>

        <Col sm="12" md="4" className="p-0 d-flex">
          <div className="d-flex justify-content-center align-items-center w-100 login-container">
            <div className="w-75">

              <Card>
                <Card.Body>
                  <Form onSubmit={createSession}>
                    <Form.Group className="mb-3">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        style={{ width: "100%" }}
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <div>
                        <Form.Control
                          style={{ width: "100%" }}
                          className="w-100"
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="password"
                        />
                        <Form.Check
                          type="checkbox"
                          id="show-password-checkbox"
                          onChange={handleToggleShowPassword}
                          label="Show password"
                          className="mb-0 align-self-center"
                        />
                      </div>
                    </Form.Group>

                    <Button type="submit" variant="primary" className="w-100">
                      Login
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
