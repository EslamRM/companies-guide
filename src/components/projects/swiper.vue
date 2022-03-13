<template>
  <div class="container">
    <div class="active flex justify-start mt-7">
      <img
        :src="selected"
        class="rounded-xl cursor-pointer shadow-lg"
        alt="Real Estate"
      />
    </div>
    <div class="thum-img flex justify-start">
      <img
        v-for="projectImage in projectImages"
        :key="projectImage.id"
        :src="projectImage.img"
        class="rounded-xl cursor-pointer shadow-lg"
        :class="{ active: projectImage.img == selected }"
        :alt="projectImage.title"
        @click="choose(projectImage.img)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "swiper",
  data() {
    return {
      selected: require("@/assets/images/Contracting.jpg"),
      projectImages: [
        {
          id: 1,
          title: "Real Estate",
          img: require("@/assets/images/Contracting.jpg"),
        },
        {
          id: 2,
          title: "Real Estate",
          img: require("@/assets/images/Food.jpg"),
        },
        {
          id: 3,
          title: "Real Estate",
          img: require("@/assets/images/real-estate.webp"),
        },
      ],
    };
  },
  methods: {
    choose(img) {
      this.selected = img;
    },
  },
};
</script>
<style>
.active img {
  max-height: 440px;
  width: 80%;
}
.thum-img {
  width: 100%;
}
.thum-img img.active {
  border: 2px solid #6366f1;
}
.thum-img img {
  width: 15%;
  margin: 20px;
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 600px) {
  .active img {
    width: 100%;
  }
  .thum-img img {
    margin: 10px 5px 0 5px;
    width: 30%;
  }
}
</style>
