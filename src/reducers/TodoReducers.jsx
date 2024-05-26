export const TodoReducer = (state = { todos: [] }, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return { todos: action.payload };
  
      case 'REMOVE_TODO':
        return { todos: action.payload };
  
      case 'EDIT_TODO':
        return { todos: action.payload };
  
      case 'TOGGLE_TODO':
        return {
          todos: state.todos.map((t) =>
            t.id === action.payload ? { ...t, completed: !t.completed } : t
          ),
        };
  
      case 'DELETE_ALL_TODOS':
        return { todos: [] };
  
      default:
        return state;
    }
  };
  