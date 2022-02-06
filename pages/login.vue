<template>
  <div class="flex items-center h-screen w-full">
    <div class="w-full">
      <AuthForm :user-data="user" :is-login="true" @onSubmit="submitForm" />
      <div
        class="flex justify-between m-4 p-4 pt-0 mt-0 md:max-w-sm md:mx-auto"
      >
        <nuxt-link class="text-blue-700" to="/">На главную</nuxt-link>
        <nuxt-link class="text-blue-700" to="/register">
          Зарегистрироваться
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'auth',
  data: () => ({
    user: {
      email: '',
      password: '',
    },
    error: null,
  }),

  methods: {
    async submitForm(data) {
      try {
        const response = await this.$auth.loginWith('local', { data });
        console.log(response);
        this.$router.push('/');
      } catch (e) {
        this.error = e.response.data.error;
        console.log(e.response);
      }
    },
  },
};
</script>
