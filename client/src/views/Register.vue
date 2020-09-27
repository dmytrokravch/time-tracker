<template>
  <div class="register">
    <div class="container p0">
      <div class="register__block">
        <h1 class="register__title">creare an account</h1>
        <div class="register__form">
          <div class="relative">
            <input
              :class="{empty: email === ''}"
              class="register__input"
              type="email"
              name="email"
              autocomplete="no"
              v-model="email" 
            />
            <label>email</label>
          </div>
          <div class="relative">
            <input
              :class="{empty: password === ''}"
              class="register__input"
              type="password"
              name="password"
              autocomplete="off"
              v-model="password"
            />
            <label>password</label>
          </div>
          <div class="register__error" v-html="error" />
          <button class="register__submit" @click="register()">Sign up</button>
        </div>
        <div class="register__login">
          <p>Already have an account?</p>
          <button>Login</button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import AutenticationService from '../../services/AutenticationService'
export default {
  name: "Home",
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AutenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  background: rgb(63,94,251);
  background: linear-gradient(155deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
  height: 100vh;
  max-height: 100vh;
  &__block {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    max-height: 60%;
    overflow-y: auto;
    background-color:#ececec;
    border-radius: 25px 25px 0 0;
    box-shadow: 0px 2px 6px 1px #000;
  }
  &__title {
    color:#464646;
    padding-top: 30px;
    padding-bottom: 40px;
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
    text-transform: capitalize;
  }
  &__form {
    padding-left: 20px;
    padding-right: 20px;
  }
  &__input {
    font-size: 14px;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 30px;
    border-radius: 25px;
    border: none;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #fff;
    box-shadow: 0px 2px 6px 1px #cdcdcd;
  }
  &__submit {
    font-size: 14px;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 30px;
    border-radius: 25px;
    border: none;
    padding-left: 20px;
    padding-right: 20px;
    height: 44px;
    line-height: 40px;
    background-color: #FFC857;
    box-shadow: 0px 2px 6px 1px #cdcdcd;
  }
  &__login {
    color: #464646;
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-around;
    font-size: 14px;
    padding-bottom: 40px;
    button {
      background-color: #FFC857;
      border: none;
      border-radius: 25px;
      height: 44px;
      line-height: 40px;
      min-width: 80px;
      box-shadow: 0px 2px 6px 1px #cdcdcd;
    }
  }
  &__error {
    color: red;
  }
}
label {
  color:#464646;;
  position:absolute;
  pointer-events:none;
  user-select: none;
  left: 20px;
  top: 12px;
  transition:0.2s ease all;
}
input:focus ~ label, input:not(.empty) ~ label{
  top: -20px;
  font-size:14px;
  color: #000;
}
</style>
