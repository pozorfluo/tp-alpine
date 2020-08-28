import store from '../store';
/**
 * Define possible states, transitions, handlers, helpers.
 *
 * @note Business state and context for guards are handled with redux store.
 */
const configMachine = {
  _current: ['version'],
  //---------------------------------------------------------- machine rules ---
  states: {
    version: {
      select(version) {
        const sequencer = store.getState().settingSequencer;
        store.dispatch({
          type: 'UPDATE_CONFIG',
          config: { version: [version] },
        });
        store.dispatch({
          type: 'SET_STEP',
          step: sequencer.next('color').value,
        });
        this._current = ['settings'];
      },
    },
    settings: {
      next(items) {
        const context = store.getState();
        const sequencer = context.settingSequencer;
        store.dispatch({
          type: 'UPDATE_CONFIG',
          config: { [context.step]: [items] },
        });
        store.dispatch({ type: 'SET_STEP', step: sequencer.next().value });

        if (this.isConfigDone(context.config)) {
          this._current = ['summary'];
        }
      },
      reset() {
        this._current = ['reset'];
      },
      down() {
        this._current = [...this._current, 'test'];
      },
    },
    summary: {
      submit() {
        /** Send config by email. */
        this._current = ['done'];
      },
      reset(origin) {
        this._current = ['reset'];
      },
    },
    reset: {
      confirm() {
        const sequencer = store.getState().settingSequencer;

        store.dispatch({ type: 'RESET_CONFIG' });
        store.dispatch({
          type: 'SET_STEP',
          step: sequencer.next('color').value,
        });
        // store.dispatch({
        //   type: 'REDIRECT',
        //   to: '/version',
        // });
        this._current = ['version'];
      },
      cancel() {
        this._current = ['summary'];
      },
    },
    done: {
      reset(origin) {
        this._current = ['reset'];
      },
    },
  },
  //---------------------------------------------------------------------- API ---
  send(event, ...payload) {
    const depth = this._current.length;
    let state = this.states[this._current[0]];
    for (let i = 1; i < depth; i++) {
      state = state.states[this._current[i]];
    }
    if (state) {
      const handler = state[event];

      if (handler) {
        handler.apply(configMachine, payload);
      }
    }
    console.log('machine state : ', this._current);
  },
  getState() {
    return this._current;
  },

  isConfigDone(config) {
    let isDone = false;
    if (config === Object(config)) {
      isDone = true;
      Object.keys(config).forEach(function (key) {
        isDone = isDone && Array.isArray(config[key]) && config[key].length;
      });
    }
    return isDone;
  },
};

export default configMachine;
