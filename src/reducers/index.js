const initialState = {
  step: 'version',
  settingSequencer: stepSequencer([
    'color',
    'rims',
    'upholstery',
    'equipment',
    'accessories',
    'summary',
  ]),
  config: {
    version: [],
    color: [],
    rims: [],
    upholstery: [],
    equipment: [],
    accessories: [],
  },
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_STEP':
      console.log('action.step : ', action.step);
      return {
        ...state,
        step: action.step,
      };
    case 'UPDATE_CONFIG':
      return {
        ...state,
        config: { ...state.config, ...action.config },
      };
    case 'RESET_CONFIG':
      return {
        ...state,
        config: {
          version: [],
          color: [],
          rims: [],
          upholstery: [],
          equipment: [],
          accessories: [],
        },
      };
    default:
      return state;
  }
}

/**
 * Return a generator that wraps around a given array of steps.
 *
 * Created generator will move its internal cursor to optional given step on
 * next() call if given step exists.
 *   i.e.: generator.next('stepValue');
 *
 * @todo Consider making 'previous' a reserved keyword used to go backward.
 * @todo Explore what exactly happens on dispatch with generators stored in the
 *       state.
 */
function* stepSequencer(steps) {
  const length = steps.length;
  for (let i = 0; ; ) {
    if (i >= length) {
      i = 0;
    } else if (i < 0) {
      i = length - 1;
    }
    const requested = steps.indexOf(yield steps[i]);
    i = requested !== -1 ? requested : i + 1;
  }
}

export default rootReducer;
