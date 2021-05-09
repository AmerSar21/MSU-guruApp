<template>
  <q-layout view="hHh Lpr lff">
    <q-header v-if="this.$route.name == 'homeuser-page'" elevated>
      <q-toolbar>
        <q-btn icon="menu" flat size="20px" @click="isDrawer = !isDrawer"></q-btn>
        <q-toolbar-title>Guru App</q-toolbar-title>

        <q-btn-dropdown icon="settings" color="white" flat>
          <div class="row no-wrap q-pa-md">
            <div class="column">
              <div class="text-h6 q-mb-md">Settings</div>
              <q-toggle v-model="mobileData" label="Use Mobile Data" />
              <q-toggle v-model="bluetooth" label="Bluetooth" />
            </div>

            <q-separator vertical inset class="q-mx-lg" />

            <div class="column items-center">
              <q-avatar size="72px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>

              <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

              <q-btn label="logout"
              class="full-width"
              text-color="red"
              to="/"
              flat
              @click="hideDrawer()" 
              v-close-popup />
            </div>
          </div>
        </q-btn-dropdown>
        <!-- <q-btn icon="settings" color="white" flat>
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
        </q-btn> -->
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

<style></style>
