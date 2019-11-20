import {ADD_NOTE, EDITE_NOTE, FETCH_NOTES, REMOVE_NOT, SHOW_LOADER} from '../types';

const handlers = {
  [SHOW_LOADER]: state => ({...state, loading: true}),
  [ADD_NOTE]: (state, {payload}) => ({
    ...state,
    notes: [...state.notes, payload]
  }),
  [FETCH_NOTES]: (state, {payload}) => ({...state, notes: payload, loading: false}),
  [REMOVE_NOT]: (state, {payload}) => ({
    ...state,
    notes: state.notes.filter(note => note.id !== payload)
  }),
  [EDITE_NOTE]: (state, {payload}) => ({
    ...state,
    notes: state.notes.map(note => {
      if ((note.id === payload.id)) {
        note.title = payload.title;
        return note
      } else return note
    }),
    loading: false,
  }),
  DEFAULT: state => state
};

export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action)
};
