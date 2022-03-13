<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader :singleProjectHeader="singleProjectHeader" />

    <!-- Project gallery -->
    <!-- <ProjectGallery :projectImages="projectImages" /> -->
    <Swiper />
    <!-- Project information -->
    <ProjectInfo :projectInfo="projectInfo" />

    <!-- Project related projects -->
    <ProjectRelatedProjects :relatedProject="relatedProject" />
  </div>
</template>
<script>
import feather from "feather-icons";
import ProjectHeader from "../components/projects/ProjectHeader.vue";
// import ProjectGallery from "../components/projects/ProjectGallery.vue";
import Swiper from "../components/projects/swiper.vue";
import ProjectInfo from "../components/projects/ProjectInfo.vue";
import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects.vue";

export default {
  name: "Projects",
  components: {
    ProjectHeader,
    Swiper,
    // ProjectGallery,
    ProjectInfo,
    ProjectRelatedProjects,
  },
  data: () => {
    return {
      singleProjectHeader: {
        singleProjectTitle: "Real Estate company",
        singleProjectDate: "Jul 26, 2021",
        singleProjectTag: "Real Estate",
      },
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
      projectInfo: {
        clientHeading: "About Company",
        companyInfos: [
          {
            id: 1,
            title: "Name",
            details: "Company Ltd",
          },
          {
            id: 2,
            title: "Services",
            details: "Real Estate",
          },
          {
            id: 3,
            title: "Website",
            details: "https://company.com",
          },
          {
            id: 4,
            title: "Phone",
            details: "555 8888 888",
          },
        ],
        objectivesHeading: "Objective",
        objectivesDetails:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
        technologies: [
          {
            title: "Tools & Technologies",
            techs: [
              "HTML",
              "CSS",
              "JavaScript",
              "Vue.js",
              "TailwindCSS",
              "AdobeXD",
            ],
          },
        ],
        projectDetailsHeading: "Challenge",
        projectDetails: [
          {
            id: 1,
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
          },
          {
            id: 2,
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
          },
          {
            id: 3,
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
          },
          {
            id: 4,
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
          },
        ],
        socialSharingsHeading: "Share This",
        socialSharings: [
          {
            id: 1,
            name: "Twitter",
            icon: "twitter",
            url: "",
          },
          {
            id: 2,
            name: "Instagram",
            icon: "instagram",
            url: "",
          },
          {
            id: 3,
            name: "Facebook",
            icon: "facebook",
            url: "",
          },
          {
            id: 4,
            name: "LinkedIn",
            icon: "linkedin",
            url: "",
          },
          {
            id: 5,
            name: "Youtube",
            icon: "youtube",
            url: "",
          },
        ],
      },
      relatedProject: {
        relatedProjectsHeading: "Related Companies",
        relatedProjects: [
          {
            id: 1,
            title: "Mobile UI",
            img: require("@/assets/images/mobile-project-1.jpg"),
          },
          {
            id: 2,
            title: "Web Application",
            img: require("@/assets/images/web-project-1.jpg"),
          },
          {
            id: 3,
            title: "UI Design",
            img: require("@/assets/images/ui-project-2.jpg"),
          },
          {
            id: 4,
            title: "Kabul Mobile App UI",
            img: require("@/assets/images/mobile-project-2.jpg"),
          },
        ],
      },
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<style scoped></style>
