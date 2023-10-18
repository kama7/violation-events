import axios from 'axios';

import mockedData from '@/data/eventData.json'

export async function fetchViolations({ commit }) {
    await axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(() => {
            commit('setViolations', mockedData.data.violations_list);
        })
        .catch((error) => {
            console.log(error);
        });
}
