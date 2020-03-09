import * as types from '../constants/actionTypes';

export function makeStep(index, value) {
  return {
    type: types.MAKE_STEP,
    payload: {
      index,
      value,
    },
  };
}

export default { makeStep };
