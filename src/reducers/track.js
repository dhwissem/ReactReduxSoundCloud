import * as actionTypes from '../constants/actionTypes';

const initialState = [];



export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.TRACKS_SET:
      return [  ...state, ...action.tracks];
  }
  return state;
}
