<template>
  <router-link
    to="/projects/single-project"
    class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
    aria-label="Single Project"
  >
    <div class="bg-red-100 relative">
      <img
        :src="project.img"
        :alt="project.title"
        class="rounded-t-xl border-none"
      />
      <div
        style="background:#0000002e;"
        class="opacity-0 hover:opacity-100 transition duration-700 ease-in-out absolute flex flex-col justify-center items-center inset-0 z-10 text-6xl text-white font-semibold"
      >
        <div
          class="font-general-medium text-ternary-dark dark:text-ternary-light flex justify-center items-center"
        >
          <i
            data-feather="globe"
            class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
          ></i
          ><span class="text-lg tracking-widest ml-2"> https://businessid.net/</span>
        </div>
        <div
          class="font-general-medium text-ternary-dark dark:text-ternary-light flex justify-center items-center"
        >
          <i
            data-feather="phone"
            class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
          ></i>
          <span class="text-lg tracking-widest ml-2">555 8888 888</span>
        </div>
      </div>
    </div>
    <div class="text-center px-4 py-6">
      <p
        class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
      >
        {{ project.title }}
      </p>
      <span
        class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
        >{{ project.category }}</span
      >
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["project"],
};
</script>
<style scoped>
.img-holder {
  position: relative;
  width: 50%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #008cba;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
}

.img-holder:hover .overlay {
  height: 100%;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
