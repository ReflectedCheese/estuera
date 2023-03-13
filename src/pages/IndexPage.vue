<template>
  <v-app id="homePage">
    <q-page class="flex flex-center">
      <img id="indexLogo" src="/img/estuera.svg" />
      <v-container fluid>
        <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->
        <v-row>
          <div class="cursor"></div>
          <div class="blur"></div>
          <div id="about-container">
            <AboutSection />
          </div>
          <div id="video-container">
            <VideoSection />
          </div>
          <div id="disco-container">
            <DiscoSection />
          </div>
          <div id="contact-container">
            <ContactSection />
          </div>
        </v-row>
      </v-container>
    </q-page>
  </v-app>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import gsap from "gsap";
import AboutSection from "../components/AboutSection.vue";
import VideoSection from "../components/VideoSection.vue";
import DiscoSection from "src/components/DiscoSection.vue";
import ContactSection from "../components/ContactSection.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    AboutSection,
    VideoSection,
    DiscoSection,
    ContactSection,
  },
});
gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

let cursor = document.querySelector(".cursor");

let mouseX;
let mouseY;

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursor, 0.5, { x: mouseX, y: mouseY });
});
</script>
