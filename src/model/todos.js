import { action, thunk, computed } from "easy-peasy";
import mockService from "../mock-service";

export default {
  items: {},

  // computed properties
  list: computed(state => Object.values(state.items)),

  // actions
  fetched: action((state, payload) => {
    state.items = payload.reduce((acc, todo) => {
      acc[todo.id] = todo;
      return acc;
    }, {});
  }),
  saved: action((state, payload) => {
    state.items[payload.id] = payload;
  }),

  // thunks
  fetchTodos: thunk(async actions => {
    const todos = await mockService.fetchTodos();
    actions.fetched(todos);
  }),
  toggle: thunk(async (actions, payload, { getState }) => {
    const todo = getState().items[payload];
    if (!todo) return;
    const updated = await mockService.updateTodo(payload, {
      done: !todo.done
    });
    actions.saved(updated);
  }),
  save: thunk(async (actions, payload) => {
    const todo = await mockService.saveTodo(payload);
    actions.saved(todo);
  })
};
