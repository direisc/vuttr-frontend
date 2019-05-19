import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tools: [],
    searchTerm: null,
    tagsOnly: false,
    fakeDB: [
      {
        title: "NodeJS",
        link: "#",
        description: `Node is Power of Java Script!`,
        tags: ["node"]
      },
      {
        title: "json-server",
        link: "#",
        description: `Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.`,
        tags: ["api", "json", "schema", "node", "github", "rest"]
      },
      {
        title: "fastfy",
        link: "#",
        description: `Extremely fast and simple, low-overhead web framework for NodeJS. Suports HTTP2.`,
        tags: ["web", "framework", "node", "http2"]
      },
    ],
  },
  getters: {
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
    setTagsOnly(context, tagsOnly) {
      context.commit('setTagsOnly', tagsOnly);
      if(context.getters.searchTerm) {
        context.dispatch('chamadaAPI');
      }
    },
    search(context, searchTerm) {
      context.commit('setSearchTerm', searchTerm);
      context.dispatch('chamadaAPI');
    },
    chamadaAPI(context) {
      if(context.state.tagsOnly) {
        context.commit('setTools', context.state.fakeDB);
      } else {
        context.commit('setTools', [
          {
            title: "json-server " + Math.round(100*Math.random()),
            link: "#",
            description: `Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.`,
            tags: ["api", "json", "schema", "node", "github", "rest"]
          },
          {
            title: "fastfy",
            link: "#",
            description: `Extremely fast and simple, low-overhead web framework for NodeJS. Suports HTTP2.`,
            tags: ["web", "framework", "node", "http2"]
          }
        ]);
      }
    },
  },
});
