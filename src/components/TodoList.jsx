import { ListGroup, CloseButton } from 'react-bootstrap';
const TodoItem = ({item}) => {
  const { title, priority} = item;
  const cssMapping = {
    'high': 'text-danger',
    'middle': 'text-primary',
    'low': 'text-success',
    'demonic': 'text-text'
  };
  const itemCss = cssMapping[priority]

  return(
    <ListGroup.Item className={itemCss}>{title} <CloseButton /> </ListGroup.Item>
  );
}

const TodoList = () => {
  const todos = [{id: 1, title: 'buy milk', priority: 'middle'}]

  if (todos.length === 0) {
    return <h3 className='mt-3'>List is emty yet...</h3>
  }
  
  return (
    <ListGroup className='mt-3'>
      {
        todos.map((item) => <TodoItem key={item.id} item={item}/>)
      }
    </ListGroup>
  )
}

export default TodoList;