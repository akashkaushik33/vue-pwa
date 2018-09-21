import auth0 from 'auth0-js'
// import { AUTH_CONFIG } from './auth0-variables'
// import EventEmitter from 'eventemitter3'
// import router from '@/router'

var webAuth = new auth0.WebAuth({
  domain: 'vue-passwordless.auth0.com',
  clientID: 'lD9QqKf143sWzfdQSp83_oCedlO0cZfs',
  redirectUri: 'https://f896668e.ngrok.io',
  responseType: 'token id_token'
})
// webAuth.crossOriginVerification()

// Send a link using email
export const passwordlessLogin = function (userEmail) {
  webAuth.passwordlessStart({
    connection: 'email',
    send: 'link',
    email: userEmail
  }, function (err, res) {
    console.log('err', err)
    console.log('res', res)
    // handle errors or continue
  })
}
// import axios from 'axios'

// export const passwordlessLogin = function (userEmail) {
//   axios.post('https://vue-passwordless.auth0.com/passwordless/start',
//     {
//       'client_id': 'lD9QqKf143sWzfdQSp83_oCedlO0cZfs',
//       'email': userEmail,
//       'connection': 'email'
//     },
//     { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' } }
//   )
// }
