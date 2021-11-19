import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(faFontAwesome)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')