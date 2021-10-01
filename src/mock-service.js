/**
 * This is a naive mocked implementation of a service. Imagine it rather
 * being a decent implementation that interacts with a remote service to
 * persist/fetch data  */

export default (() => {
  let todoIdx = 3;
  let todos = [
    {
      id: 1,
      text: 'Install easy-peasy',
      done: true,
    },
    {
      id: 2,
      text: 'Build an app',
      done: false,
    },
    {
      id: 3,
      text: 'Profit',
      done: false,
    },
  ];

  return {
    fetchTodos: () => Promise.resolve(todos.map(x => ({ ...x }))),
    saveTodo: text => {
      todoIdx++;
      const todo = {
        id: todoIdx,
        text,
        done: false,
      };
      todos.push({ ...todo });
      return Promise.resolve(todo);
    },
    updateTodo: (id, data) => {
      const todo = todos.find(x => x.id === id);
      Object.keys(data).forEach(key => {
        todo[key] = data[key];
      });
      return Promise.resolve({ ...todo });
    },
  };
})();
