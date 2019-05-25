import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/services/api';

import Swal from 'sweetalert2';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tools: [],
    searchTerm: '',
    tagsOnly: false,
    optionsSweetAlert: {
      customClass: {
        confirmButton: 'button is-primary',
        cancelButton: 'button is-light',
        // popup: 'animated fast tada'
      },
      buttonsStyling: false,
      reverseButtons: true,
      scrollbarPadding: false,
      // animation: false,
    },
  },
  getters: {
    swal: state => Swal.mixin(state.optionsSweetAlert).fire.bind(Swal.mixin(state.optionsSweetAlert)),
    searchTerm: state => state.searchTerm,
    tools: state => state.tools,
  },
  mutations: {
    setSearchTerm(state, searchTerm) {
      state.searchTerm = searchTerm;
    },
    setTagsOnly(state, tagsOnly) {
      state.tagsOnly = tagsOnly;
    },
    setTools(state, tools) {
      state.tools = tools;
    },
  },
  actions: {
    search(context, searchTerm) {
      context.commit('setSearchTerm', searchTerm);
      context.dispatch('callSearchAPI');
    },
    setTagsOnly(context, tagsOnly) {
      context.commit('setTagsOnly', tagsOnly);
      if (context.getters.searchTerm) {
        context.dispatch('callSearchAPI');
      }
    },
    async tools(context) {
      const response = await api.get('tools');
      context.commit('setTools', response.data);
    },
    async callSearchAPI(context) {
      if (context.state.tagsOnly) {
        const response = await api.get(`tools?tags_like=${context.state.searchTerm}`);
        context.commit('setTools', response.data);
      } else {
        const response = await api.get(`tools?q=${context.state.searchTerm}`);
        context.commit('setTools', response.data);
      }
    },
    async remove(context, tool) {
      try {
        const response = await api.delete(`tools/${tool._id}`);
        context.getters.swal('Removed!', 'Tool has been removed.', 'success');
        context.dispatch('callSearchAPI');
      } catch (error) {
        if (error.response.status === 401) {
          context.getters.swal('You are Unauthorized!', 'Tool can not be removed.', 'info');
        } else {
          context.getters.swal('Sorry!', 'Tool can not be removed. Try again!', 'error');
        }
      }
    },
    async create(context, tool) {
      try {
        const response = await api.post('tools', tool);
        context.getters.swal('Added!', 'Tool has been added.', 'success');
        context.dispatch('callSearchAPI');
      } catch (error) {
        context.getters.swal('Sorry!', 'Server cannot process request. Try again!', 'error');
      }
    },
  },
});
