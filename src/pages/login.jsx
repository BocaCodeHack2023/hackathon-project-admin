import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function LoginPage() {


  function login(e){
    e.preventDefault();
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      
    }}>
      <img src='images/awarness-ribbons.webp'  
      style={{
        
        width: "50vw",
        height: "100vh"
      }}/>
      <div className="d-flex flex-row flex-wrap justify-content-center bg-light"
      style={{
        height: "100vh",
        width: "50vw"
      }}>
       

        <Form 
        style={{
          marginTop: "25vh"
        }}>
        <h2 className='d-flex justify-content-center'>Login</h2>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
      </Form>
      </div>
      
    </div>
  )
}