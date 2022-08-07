<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="header">
      <q-toolbar class="toolbar">
        <q-avatar class="headerLogo">
          <img class="estueraAvatar" src="/img/estuera.svg?import." />
        </q-avatar>
      </q-toolbar>
      <q-tabs class="footerTab" align="right">
        <q-route-tab to="/about" label="About" />
        <q-route-tab to="/videos" label="Videos" />
        <q-route-tab to="/discography" label="Discography" />
        <q-route-tab to="/contact" label="Contact" />
      </q-tabs>
    </q-header>

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
  </q-layout>
</template>
