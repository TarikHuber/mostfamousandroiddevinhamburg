import getMenuItems from './menuItems'
import locales from './locales'
import routes from './routes'
import themes from './themes'
import grants from './grants'

const config = {
  firebase_config: {
    apiKey: "AIzaSyD8_i0rzr8om9qJMlRGbQAE7Abc2170REo",
    authDomain: "mostfamousandroiddevinhamburg.firebaseapp.com",
    databaseURL: "https://mostfamousandroiddevinhamburg.firebaseio.com",
    projectId: "mostfamousandroiddevinhamburg",
    storageBucket: "",
    messagingSenderId: "1002414627357"
  },
  firebase_config_dev: {
    apiKey: "AIzaSyD8_i0rzr8om9qJMlRGbQAE7Abc2170REo",
    authDomain: "mostfamousandroiddevinhamburg.firebaseapp.com",
    databaseURL: "https://mostfamousandroiddevinhamburg.firebaseio.com",
    projectId: "mostfamousandroiddevinhamburg",
    storageBucket: "",
    messagingSenderId: "1002414627357"
  },
  firebase_providers: [
    'google.com',
    'facebook.com',
    'twitter.com',
    'github.com',
    'password',
    'phone'
  ],
  initial_state: {
    themeSource: {
      isNightModeOn: true,
      source: 'light'
    },
    locale: 'en'
  },
  drawer_width: 256,
  locales,
  themes,
  grants,
  routes,
  getMenuItems,
  firebaseLoad: () => import('./firebase'),
}

export default config
