<template>
  <v-app id="homePage">
    <q-page class="flex flex-center">
      <img id="indexLogo" src="/img/estuera.svg?import." />

      <v-container fluid>
        <font-awesome-icon icon="fa-solid fa-user-secret" />
        <v-row>
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
import { defineComponent } from "vue";
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
</script>
