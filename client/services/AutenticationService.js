import Api from './Api';

export default {
  register (credentials) {
    return Api().post('register', credentials);
  }
}

// AutenticalService.register({
//   email: 'test@gmail.com',
//   password: '123456'
// })