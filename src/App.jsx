import AddForm from "./components/AddForm";
import {Container, Row, Col} from 'react-bootstrap';
const App = () => {
  return (
    <Container>
      <Row>
        <Col className="col-8">
          <h1>React-Redux TODO</h1>
          <AddForm />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
