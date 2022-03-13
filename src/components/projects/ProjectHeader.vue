<template>
  <div>
    <!-- Project heading and meta info -->
    <div class="flex items-center">
      <div
        class="w-11 h-11 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center Clogo cursor-pointer shadow-lg font-general-medium text-left text-md sm:text-3xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7 mr-2 sm:mr-5"
      >
        R
      </div>
      <p
        class="font-general-medium text-left text-md sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
      >
        {{ singleProjectHeader.singleProjectTitle }}
      </p>
    </div>

    <div class="flex">
      <div class="flex items-center mr-10">
        <i
          data-feather="clock"
          class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
        ></i>
        <span
          class="font-general-medium ml-1 sm:ml-2 text-sm sm:text-md leading-none text-primary-dark dark:text-primary-light"
          >{{ singleProjectHeader.singleProjectDate }}</span
        >
      </div>
      <div class="flex items-center">
        <i
          data-feather="tag"
          class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
        ></i>
        <span
          class="font-general-medium ml-1 sm:ml-2 text-sm sm:text-md leading-none text-primary-dark dark:text-primary-light"
          >{{ singleProjectHeader.singleProjectTag }}</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["singleProjectHeader"],
};
</script>
<style>
.Clogo {
  border: 3px solid #6366f1
}
</style>
