<template>
  <q-layout view="hHh Lpr lff">
    <q-header v-if="this.$route.name == 'homeadmin-page'" elevated>
      <q-toolbar>
        <q-btn
          icon="menu"
          flat
          size="20px"
          @click="isDrawer = !isDrawer"
        ></q-btn>
        <q-toolbar-title>Guru App</q-toolbar-title>
        <q-btn icon="settings" color="white" flat>
          <q-menu padding fit :offset="[0, 15]">
            <q-btn
              label="logout"
              class="full-width"
              text-color="red"
              size="12px"
              to="/"
              flat
              @click="hideDrawer()"
            ></q-btn>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-header v-if="this.$route.name == 'homeuser-page'" elevated>
      <q-toolbar>
        <q-btn
          icon="menu"
          flat
          size="20px"
          @click="isDrawer = !isDrawer"
        ></q-btn>
        <q-toolbar-title>Guru App</q-toolbar-title>
        <q-btn icon="settings" color="white" flat>
          <q-menu padding fit :offset="[0, 15]">
            <q-btn
              label="logout"
              class="full-width"
              text-color="red"
              size="12px"
              to="/"
              flat
              @click="hideDrawer()"
            ></q-btn>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-header v-if="this.$route.name == 'homestudent-page'" elevated>
      <q-toolbar>
        <q-btn
          icon="menu"
          flat
          size="20px"
          @click="isDrawer = !isDrawer"
        ></q-btn>
        <q-toolbar-title>Guru App</q-toolbar-title>
        <q-btn icon="settings" color="white" flat>
          <q-menu padding fit :offset="[0, 15]">
            <q-btn
              label="logout"
              class="full-width"
              text-color="red"
              size="12px"
              to="/"
              flat
              @click="hideDrawer()"
            ></q-btn>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <Drawer :isDrawer="isDrawer" @shoudHide="hideDrawer()" />
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import Drawer from "src/components/Drawer.vue";
export default {
  emits: ["shoudHide"],
  components: {
    Drawer,
  },
  data() {
    return {
      isDrawer: false,
      user: {
        type: "admin",
      },
    };
  },
  methods: {
    hideDrawer(val) {
      console.log(val);
      this.isDrawer = val;
    },
  },
};
</script>

<style>
</style>