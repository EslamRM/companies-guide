<template>
  <!-- Projects grid -->
  <section>
    <div class="mt-10 sm:mt-10">
      <div
        class="
					flex
					justify-between
					border-b border-primary-light
					dark:border-secondary-dark
					pb-3
					gap-2
				"
      >
        <div class="flex justify-between gap-2">
          <span
            class="
							hidden
							sm:block
							bg-primary-light
							dark:bg-ternary-dark
							p-2.5
							shadow-sm
							rounded-xl
							cursor-pointer
							"
          >
            <i
              data-feather="search"
              class="text-ternary-dark dark:text-ternary-light"
            ></i>
          </span>
          <input
            v-model="searchProject"
            class="font-general-medium
						pl-3
						pr-1
						sm:px-4
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
            id="name"
            name="name"
            type="search"
            required=""
            placeholder="Search Companies"
            aria-label="Name"
          />
        </div>
        <ProjectsFilter @filter="selectedCategory = $event" />
      </div>
    </div>
    <div
      class="pt-10 sm:pt-14"
      v-for="(company, index) in companies"
      :key="index"
    >
      <!-- Projects grid title -->
      <div class="text-center">
        <p
          class="font-general-semibold text-2xl sm:text-4xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
        >
          {{ company }}
        </p>
      </div>

      <!-- Filter and search projects -->
      <div class="mt-10 sm:mt-10">
        <h3
          class="font-general-regular
					text-center text-secondary-dark
					dark:text-ternary-light
					text-md
					sm:text-xl
					font-normal
					mb-4
				"
        >
          click to see details
        </h3>
        <div
          class="
					border-b border-primary-light
					dark:border-secondary-dark
					pb-3
					gap-2
				"
        >
          <div class="flex justify-end">
            <router-link
              to="/projects"
              class="flex items-center px-3 py-2 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-md sm:text-md duration-300"
              aria-label="see all"
            >
              <Button title="Show More" class="text-white"/>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Projects grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
      >
        <ProjectSingle
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
<script>
import feather from "feather-icons";
import ProjectSingle from "./ProjectSingle.vue";
import ProjectsFilter from "./ProjectsFilter";
import projects from "../../data/projects";
import Button from "../reusable/Button.vue";

export default {
  components: { ProjectSingle, Button, ProjectsFilter },
  props: ["singleProjectHeader"],
  data: () => {
    return {
      projects,
      companies: [
        "Contracting",
        "Real Estate",
        "Food",
        "Foodstuff",
        "Nuts and Fruits",
        "Cars",
      ],
      selectedCategory: "",
      searchProject: "",
    };
  },
  computed: {
    // Get the filtered projects
    filteredProjects() {
      if (this.selectedCategory) {
        return this.filterProjectsByCategory();
      } else if (this.searchProject) {
        return this.filterProjectsBySearch();
      }
      return this.projects;
    },
  },
  methods: {
    // Filter projects by category
    filterProjectsByCategory() {
      return this.projects.filter((item) => {
        let category =
          item.category.charAt(0).toUpperCase() + item.category.slice(1);
        console.log(category);
        return category.includes(this.selectedCategory);
      });
    },
    // Filter projects by title search
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, "i");
      return this.projects.filter((el) => el.title.match(project));
    },
  },
  mounted() {
    feather.replace();
  },
};
</script>

<style scoped></style>
