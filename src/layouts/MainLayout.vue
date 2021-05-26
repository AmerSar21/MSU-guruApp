<template>
  <q-layout view="hHh Lpr lff">
    <q-header v-if="this.$route.name == 'homeadmin-page'" elevated>
      <div class="">
        <div class="row no-wrap">
          <q-toolbar class="col-8">
            <q-btn flat round dense icon="menu" @click="isDrawer = !isDrawer" />
            <q-toolbar-title><b>Guru</b>App</q-toolbar-title>
            <q-btn flat round dense icon="search" />
          </q-toolbar>
          <q-toolbar class="col-4 bg-primary text-white">
            <q-space />
            <q-btn flat round dense icon="assignment_ind" class="q-mr-sm" />
            <q-btn flat round dense icon="more_vert">
              <q-menu auto-close>
                <q-list style="min-width: 100px">
                  <q-item clickable>
                    <q-item-section>Settings</q-item-section>
                  </q-item>
                  <q-separator dark />
                  <q-item clickable>
                    <q-item-section>Help &amp; Feedback</q-item-section>
                  </q-item>
                  <q-separator dark />
                  <q-item clickable to="/" @click="hideDrawer()" v-close-popup>
                    <q-item-section>Logout</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-toolbar>
        </div>
      </div>
    </q-header>
    <q-header v-if="this.$route.name == 'homeuser-page'" elevated>
      <div class="">
        <div class="row no-wrap">
          <q-toolbar class="col-8">
            <q-btn flat round dense icon="menu" @click="isDrawer = !isDrawer" />
            <q-toolbar-title><b>Guru</b>App</q-toolbar-title>
            <q-btn flat round dense icon="search" />
          </q-toolbar>
          <q-toolbar class="col-4 bg-primary text-white">
            <q-space />
            <q-btn flat round dense icon="assignment_ind" class="q-mr-sm" />
            <q-btn flat round dense icon="more_vert">
              <q-menu auto-close>
                <q-list style="min-width: 100px">
                  <q-item clickable>
                    <q-item-section>Settings</q-item-section>
                  </q-item>
                  <q-separator dark />
                  <q-item clickable>
                    <q-item-section>Help &amp; Feedback</q-item-section>
                  </q-item>
                  <q-separator dark />
                  <q-item clickable to="/" @click="hideDrawer()" v-close-popup>
                    <q-item-section>Logout</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-toolbar>
        </div>
      </div>
    </q-header>
    <q-header v-if="this.$route.name == 'homestudent-page'" elevated>
      <div class="">
        <div class="row no-wrap">
          <q-toolbar class="col-8">
            <q-btn flat round dense icon="menu" @click="isDrawer = !isDrawer" />
            <q-toolbar-title><b>Guro</b>App</q-toolbar-title>
            <q-btn flat round dense icon="search" />
          </q-toolbar>
          <q-toolbar class="col-4 bg-primary text-white">
            <q-space />
            <q-btn flat round dense icon="assignment_ind" class="q-mr-sm" />
            <q-btn flat round dense icon="more_vert">
              <q-menu auto-close>
                <q-list style="min-width: 100px">
                  <q-item clickable>
                    <q-item-section>Settings</q-item-section>
                  </q-item>
                  <q-separator dark />
                  <q-item clickable>
                    <q-item-section>Help &amp; Feedback</q-item-section>
                  </q-item>
                  <q-separator dark />
                  <q-item clickable to="/" @click="hideDrawer()" v-close-popup>
                    <q-item-section>Logout</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-toolbar>
        </div>
      </div>
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
    Drawer
  },
  data() {
    return {
      isDrawer: false,
      user: {
        type: "admin"
      }
    };
  },
  methods: {
    hideDrawer(val) {
      console.log(val);
      this.isDrawer = val;
    }
  }
};
</script>

<style></style>
