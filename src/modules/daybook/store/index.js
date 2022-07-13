

import state from './state';
import * as mutations from './mutations';
import * as getters from './getters';
import * as actions from './actions';

const journalModule = {
    namespaced: true,
    actions,
    mutations,
    getters,
    state
};

export default journalModule;
