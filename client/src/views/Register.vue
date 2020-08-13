<template>
  <div class="home">
    <h1>Register</h1>
    <input type="email" name="email" placeholder="email" v-model="email" />
    <input type="password" name="password" placeholder="password" v-model="password" />
    <button @click="register()">Register!</button>
  </div>
</template>

<script>
import AutenticationService from '../../services/AutenticationService'
export default {
  name: "Home",
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AutenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
};
</script>
