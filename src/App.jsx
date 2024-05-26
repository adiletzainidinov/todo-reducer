import { useState } from 'react';
import './App.css';
import Button from './components/UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  AddTodoAction,
  RemoveTodoAction,
  EditTodoAction,
  ToggleTodoAction,
  DeleteAllTodoAction,
} from './actions/TodoActions';

function App() {
  const [todo, setTodo] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
    setTodo('');
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  const editHandler = (t) => {
    setEditId(t.id);
    setEditText(t.todo);
  };

  const saveHandler = (t) => {
    dispatch(EditTodoAction({ ...t, todo: editText }));
    setEditId(null);
    setEditText('');
  };

  const toggleHandler = (id) => {
    dispatch(ToggleTodoAction(id));
  };

  const deleteAllHandler = () => {
    dispatch(DeleteAllTodoAction());
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h2>Todo List App in Redux</h2>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Enter a Todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <Button>Go</Button>
          </form>
          <Button onClick={deleteAllHandler}>Delete All</Button>
          <ul className="allTodos">
            {todos &&
              todos.map((t) => (
                <li
                  key={t.id}
                  className={`singleTodo ${t.completed ? 'completed' : ''}`}
                >
                  {editId === t.id ? (
                    <input
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                  ) : (
                    <span className="todoText">{t.todo}</span>
                  )}
                  <Button onClick={() => toggleHandler(t.id)}>
                    {t.completed ? 'Undo' : 'Complete'}
                  </Button>
                  <Button onClick={() => removeHandler(t)}>Delete</Button>
                  {editId === t.id ? (
                    <Button onClick={() => saveHandler(t)}>Save</Button>
                  ) : (
                    <Button onClick={() => editHandler(t)}>Edit</Button>
                  )}
                </li>
              ))}
          </ul>
        </header>
      </div>
    </>
  );
}

export default App;
