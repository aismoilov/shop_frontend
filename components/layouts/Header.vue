<template>
  <div class="shadow flex flex-wrap items-center justify-between p-4 bg-white">
    <img class="h-20" src="logo.png" />
    <Search />
    <div id="menu" class="hidden w-full md:flex md:items-center md:w-auto">
      <ul
        v-if="user"
        class="pt-4 pr-4 text-lg text-gray-700 md:flex md:justify-between md:pt-0"
      >
        <li>
          <nuxt-link
            class="md:p-4 py-2 block hover:text-purple-400"
            to="/register"
          >
            {{ user.name }}
          </nuxt-link>
        </li>
        <li>
          <button
            @click="logout"
            class="md:p-4 py-2 block hover:text-purple-400"
          >
            Выйти
          </button>
        </li>
      </ul>
      <ul
        v-else
        class="pt-4 pr-4 text-lg text-gray-700 md:flex md:justify-between md:pt-0"
      >
        <li>
          <nuxt-link
            class="md:p-4 py-2 block hover:text-purple-400"
            to="/register"
          >
            Регистрация
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            class="md:p-4 py-2 block hover:text-purple-400"
            to="/login"
          >
            Войти
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',

  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    logout() {
      this.$emit('onLogout');
    },
  },
};
</script>
