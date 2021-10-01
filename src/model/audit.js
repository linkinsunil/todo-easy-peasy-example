import { action, thunk } from 'easy-peasy';
import preferences from './preferences';
import todos from './todos';

export default {
  logs: [],
  onTodoSaved: action(
    (state, payload) => {
      state.logs.push(`Saved todo: ${payload.text}`);
    },
    { listenTo: todos.save },
  ),
  onThemeChanged: thunk(
    (actions, payload) => {
      console.log(`Changed theme: ${payload}`);
    },
    { listenTo: preferences.toggle },
  ),
};
