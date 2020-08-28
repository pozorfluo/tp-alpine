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
      /**
       * Update config with initial version preset.
       */
      select(version) {
        store.dispatch({
          type: 'UPDATE_CONFIG',
          config: { version: [version] },
        });
      },
      /**
       * Transition to settings edition for selected version if any.
       */
      next() {
        const context = store.getState();
        const sequencer = context.settingSequencer;
        if (context.config.version.length) {
          store.dispatch({
            type: 'SET_STEP',
            step: sequencer.next('color').value,
          });
          this._current = ['settings'];
        }
      },
    },
    settings: {
      /**
       *
       */
      select(item) {
        const context = store.getState();
        store.dispatch({
          type: 'UPDATE_CONFIG',
          config: { [context.step]: [item] },
        });
      },
      /**
       *
       */
      add(item) {
        const context = store.getState();
        store.dispatch({
          type: 'UPDATE_CONFIG',
          config: { [context.step]: [...context.config[context.step], item] },
        });
      },
      /**
       *
       */
      next(items) {
        const context = store.getState();
        const sequencer = context.settingSequencer;
        store.dispatch({ type: 'SET_STEP', step: sequencer.next().value });

        if (this.isConfigDone(context.config)) {
          this._current = ['summary'];
        }
      },
      /**
       *
       */
      nav(path) {
        const context = store.getState();
        const sequencer = context.settingSequencer;
        if (path !== context.step) {
          store.dispatch({
            type: 'SET_STEP',
            step: sequencer.next(path).value,
          });
          this._current = ['settings'];
        }
      },
      /**
       *
       */
      reset() {
        this._current = ['reset'];
      },
      /**
       *
       */
      down() {
        this._current = [...this._current, 'test'];
      },
    },
    summary: {
      /**
       *
       */
      submit() {
        /** Send config by email. */
        this._current = ['done'];
      },
      /**
       *
       */
      reset(origin) {
        this._current = ['reset'];
      },
    },
    reset: {
      /**
       *
       */
      confirm() {
        store.dispatch({ type: 'RESET_CONFIG' });
        store.dispatch({
          type: 'SET_STEP',
          step: 'version',
        });

        this._current = ['version'];
      },
      /**
       *
       */
      cancel() {
        this._current = ['summary'];
      },
    },
    done: {
      /**
       *
       */
      reset(origin) {
        this._current = ['reset'];
      },
    },
  },
  //-------------------------------------------------------------------- API ---
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

// /**
//  * Transition to settings edition at given setting screen for selected
//  * version if any.
//  */
// nav(path) {
//   const context = store.getState();
//   if (context.config.version.length && path !== context.step) {
//     context.settingSequencer.next(path);
//     store.dispatch({
//       type: 'SET_STEP',
//       step: path,
//     });
//     this._current = ['settings'];
//   }
// },
