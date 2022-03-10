<template>
  <a href="#" @click.prevent="toggleTheme" aria-label="Theme Switcher">
    <i
      v-if="theme === 'light'"
      data-feather="moon"
      class="theme-icon text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"
    ></i>
    <i
      v-else
      data-feather="sun"
      class="theme-icon text-gray-200 hover:text-gray-50 w-5"
    ></i>
  </a>
</template>
<script>
export default {
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleTheme() {
      const newTheme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      this.$emit("themeChanged", newTheme);
      this.$router.go();
    },
  },
};
</script>
<style>
@media (max-width: 640px) {
  .theme-icon {
    width: 0.75rem !important;
    height: 0.75rem !important;
  }
}
</style>
