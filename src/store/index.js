import Vue from 'vue'
import Vuex from 'vuex'
import violations from "@/store/violations";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    violations
  }
})
