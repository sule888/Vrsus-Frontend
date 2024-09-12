import './assets/main.css'



import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import NormalButton from "@/components/NormalButton.vue"
import CircleButton from "./components/CircleButton.vue";
import BaseNormalButton from './components/BaseNormalButton.vue'
import BaseCircularButton from '@/components/BaseCircularButton.vue'
import { FontAwesomeIcon } from '@/fontAwesome.js'
import 'swiper/swiper-bundle.css';

export { FontAwesomeIcon }

const app = createApp(App)

const components = [
    { name: 'NormalButton', component: NormalButton },
    { name: 'CircleButton', component: CircleButton },
    { name: 'BaseCircularButton', component: BaseCircularButton },
    { name: 'BaseNormalButton', component: BaseNormalButton },
    { name: 'FontAwesomeIcon', component: FontAwesomeIcon },
  ]

  components.forEach(({ name, component }) => {
    app.component(name, component)
  })
app.use(router)

app.mount('#app')
