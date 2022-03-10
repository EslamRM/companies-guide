<template>
  <select
    @change="$emit('filter', $event.target.value)"
    :name="select"
    :id="select"
    class="font-general-medium
				w-32
				px-4
				py-2
				border-1 border-gray-200
				dark:border-secondary-dark
				rounded-lg
				text-sm
				sm:text-md
				bg-secondary-light
				dark:bg-ternary-dark
				text-primary-dark
				dark:text-ternary-light
			"
  >
    <option value class="text-sm sm:text-md">Filter By</option>
    <option
      v-for="option in selectOptions"
      :key="option"
      :value="option"
      class="sm:text-md"
    >
      {{ option }}
    </option>
  </select>
</template>
<script>
export default {
  props: {
    select: {
      type: String,
      default: "projects",
      required: true,
    },
    selectOptions: {
      type: Array,
      default: () => [
        "Name",
        "Category",
        "City",
      ],
    },
  },
};
</script>
<style lang="scss" scoped></style>
