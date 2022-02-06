export const state = () => ({
  user: {},
});

export const getters = {
  getManagersList: (state) => {
    const managers = state.managerList.map((manager) => ({
      name: `${manager.lastName} ${manager.firstName} ${
        manager.middleName || ''
      }`,
      val: manager.id,
    }));

    if (!managers) {
      return false;
    }
    return managers;
  },
  isManager: (state) => {
    const user = state.user;

    if (user.roles !== undefined && user.roles.includes('ROLE_MANAGER')) {
      return true;
    }
    return false;
  },
};

export const mutations = {
  setManagers(state, data) {
    if (data) {
      state.managerList = data;
    }
  },
  setUser(state, user) {
    state.user = Object.keys(user).length > 0 ? Object.assign({}, user) : {};
  },
};

export const actions = {
  async getManagersList({ commit, state }, { isManager }) {
    if (!isManager || state.managerList.length > 0) return;
    const managers = await this.$axios.$get('/api/v1/partner/broker/list');

    commit('setManagers', managers.data);
  },
};
