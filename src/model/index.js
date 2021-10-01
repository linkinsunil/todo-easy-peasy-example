import { thunk } from 'easy-peasy';
import audit from './audit';
import preferences from './preferences';
import todos from './todos';

export default {
  audit,
  preferences,
  todos,
  initialise: thunk(async (actions, payload, { dispatch }) => {
    await dispatch.todos.fetchTodos();
  }),
};
