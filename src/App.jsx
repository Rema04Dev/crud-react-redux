import {Container, Row, Col} from 'react-bootstrap';
import AddForm from "./components/AddForm";
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Container>
      <Row>
        <Col className="col-8">
          <h1>React-Redux TODO</h1>
          <AddForm />
          <TodoList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
