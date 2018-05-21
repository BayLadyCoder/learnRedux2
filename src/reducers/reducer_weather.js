import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {

    case FETCH_WEATHER:
    return !action.payload.data ? state : [action.payload.data, ...state];
    // it will be like [city, city, city] NOT [city, [city, city]]
  }
  return state;
}
