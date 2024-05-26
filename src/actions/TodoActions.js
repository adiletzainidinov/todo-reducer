export const AddTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  const hasTodo = todos.find((i) => i.todo === todo);
  if (!hasTodo && todo !== '') {
    dispatch({
      type: 'ADD_TODO',
      payload: [{ id: todo, todo }, ...todos],
    });
  }
};

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();
  dispatch({
    type: 'REMOVE_TODO',
    payload: todos.filter((t) => t.id !== todo.id),
  });
};

export const EditTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  const updatedTodos = todos.map((t) =>
    t.id === todo.id ? { ...t, todo: todo.todo } : t
  );

  dispatch({
    type: 'EDIT_TODO',
    payload: updatedTodos,
  });
};

export const ToggleTodoAction = (id) => (dispatch, getState) => {
  dispatch({
    type: 'TOGGLE_TODO',
    payload: id,
  });
};

export const DeleteAllTodoAction = () => (dispatch) => {
    dispatch({
      type: 'DELETE_ALL_TODOS',
    });
  };
  
