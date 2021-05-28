<template>
  <q-page class="flex flex-center">
    <q-card class="__card shadow-10 bg-grey-1 q-pa-lg">
      <q-item-label class="text-center text-h3"> <b>Guro</b>App </q-item-label>
      <q-card-section>
        <q-input
          v-model="user.username"
          color="green"
          label="Username"
          type="text"
        >
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>
        <q-input
          v-model="user.userpass"
          color="green"
          label="Password"
          :type="hidePassword ? '' : 'password'"
          @keypress.enter="login()"
        >
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="hidePassword ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="hidePassword = !hidePassword"
            />
          </template>
        </q-input>
      </q-card-section>
      <q-card-actions>
        <q-btn
          color="primary"
          label="Log in"
          class="full-width"
          size="m"
          @click="login()"
        >
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        userpass: "",
      },
      hidePassword: false,
    };
  },
  methods: {
    login() {
      if (this.user.username == "admin" && this.user.userpass == "pass") {
        this.$router.push("/home-admin");
      } else if(this.user.username == "user" && this.user.userpass == "pass"){
        this.$router.push("/home-user");
      } else if(this.user.username == "student" && this.user.userpass == "pass"){
        this.$router.push("/home-student");
      }else if((this.user.username == "" && this.user.userpass == "") || (this.user.username == "" || this.user.userpass == "")){
        alert("Complete the fields");
      }else{
        alert("Error username and password");
      }
    },
  },
};
</script>

<style scoped>
.__card {
  width: 350px;
}
</style>