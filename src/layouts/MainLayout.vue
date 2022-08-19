<template>
  <div class="q-pa-md">
    <q-layout
      view="hHh lpR fFf"
      container
      style="height: 400px"
      class="shadow-2 rounded-borders"
    >
      <q-header elevated class="header">
        <q-toolbar class="toolbar">
          <q-avatar class="headerLogo">
            <NavLogo @click="scrollToTop()" />
          </q-avatar>
        </q-toolbar>
        <q-tabs class="footerTab" align="right">
          <q-btn flat text @click="scroll('about-container')">ABOUT</q-btn>
          <q-btn flat text @click="scroll('video-container')">VIDEOS</q-btn>
          <q-btn flat text @click="scroll('disco-container')"
            >DISCOGRAPHY</q-btn
          >
          <q-btn flat text @click="scroll('contact-container')">CONTACT</q-btn>
        </q-tabs>
      </q-header>
      <!-- <q-page-scroller
      position="bottom-right"
      :scroll-offset="50"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller> -->

      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer class="footer">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <img src="/img/FullLogo.svg?import." />
            </q-avatar>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
    </q-layout>
  </div>
</template>

<script>
import NavLogo from "src/components/NavLogo.vue";
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
  components: { NavLogo },
};
</script>
