<template>
  <div class="flex items-center h-screen w-full">
    <div class="w-full">
      <AuthForm :user-data="user" @onSubmit="submitForm" />
      <div
        class="flex justify-between m-4 p-4 pt-0 mt-0 md:max-w-sm md:mx-auto"
      >
        <nuxt-link class="text-blue-700" to="/">На главную</nuxt-link>
        <nuxt-link class="text-blue-700" to="/login">Войти</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  layout: 'auth',
  data: () => ({
    user: {
      name: '',
      email: '',
      password: '',
    },
  }),

  methods: {
    submitForm(data) {
      this.$axios.post('/users', data).then((res) => {
        this.$auth.loginWith('local', { data }).then(() => {
          this.$router.push('/');
        });
      });
    },
  },
};
</script>
