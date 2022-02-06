<template>
  <div>
    <LayoutsHeader :user="authUser" @onLogout="logoutUser" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    authUser() {
      return this.$auth.user || null;
    },
  },

  methods: {
    async logoutUser() {
      await this.$auth.logout();
    },
  },
};
</script>
