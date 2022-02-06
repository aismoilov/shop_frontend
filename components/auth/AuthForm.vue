<template>
  <div class="bg-white rounded-lg shadow-lg p-4 m-4 md:max-w-sm md:mx-auto">
    <nuxt-link to="/">
      <img class="h-20 mx-auto" src="logo.png" />
    </nuxt-link>
    <span class="block text-center w-full text-xl uppercase font-bold mb-2">
      {{ isLogin ? 'Вход' : 'Регистрация' }}
    </span>
    <ValidationObserver v-slot="{ invalid }">
      <div class="w-full flex flex-col items-center justify-center">
        <div v-if="!isLogin" class="my-2 w-2/3 md:w-full">
          <ValidationProvider rules="required|min:3" v-slot="{ errors }">
            <input
              class="w-full border rounded p-2 outline-none focus:shadow-outline"
              type="text"
              v-model="user.name"
              name="Имя"
              placeholder="Имя"
            />
            <span class="text-xs text-red-600">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="my-2 w-2/3 md:w-full">
          <ValidationProvider rules="required|email" v-slot="{ errors }">
            <input
              class="w-full border rounded p-2 outline-none focus:shadow-outline"
              type="email"
              v-model="user.email"
              name="Email"
              placeholder="Email"
            />
            <span class="text-xs text-red-600">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="my-2 w-2/3 md:w-full">
          <ValidationProvider rules="required|min:8" v-slot="{ errors }">
            <input
              id="password"
              class="w-full border rounded p-2 outline-none focus:shadow-outline"
              type="password"
              v-model="user.password"
              name="Пароль"
              placeholder="Пароль"
            />
            <span class="text-xs text-red-600">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <button
          :disabled="invalid"
          @click="submitForm"
          class="bg-green-500 hover:bg-green-700 text-center text-white uppercase my-4 text-sm font-semibold px-4 py-2 rounded-lg"
          :class="{ 'opacity-50 cursor-not-allowed': invalid }"
        >
          {{ isLogin ? 'Войти' : 'Зарегистрироваться' }}
        </button>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
  name: 'AuthForm',
  data: () => ({
    user: {},
  }),

  props: {
    userData: {
      type: Object,
      default: () => {},
    },
    isLogin: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    ValidationProvider,
    ValidationObserver,
  },

  mounted() {
    this.user = Object.assign({}, this.userData);
  },

  methods: {
    submitForm() {
      const data = Object.assign({}, this.user);
      this.$emit('onSubmit', data);
    },
  },
};
</script>
