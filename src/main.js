import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import NormalButton from "@/components/NormalButton.vue"
import CircleButton from "./components/CircleButton.vue";
import BaseCircularButton from './components/BaseCircularButton.vue'
import BaseNormalButton from './components/BaseNormalButton.vue'
const app = createApp(App)

// Importar mas componentes globales y agregarlos aqui
const components={
    NormalButton,
    CircleButton,
    BaseCircularButton,
    BaseNormalButton
}

for (const [name, component]  of Object.entries(components)){
    app.component(name, component)
}
app.use(router)

app.mount('#app')
