import Vue from 'vue';

export function setViolations(state, data) {
    Vue.set(state, 'violations', data);
}
