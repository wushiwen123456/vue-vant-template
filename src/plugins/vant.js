  
import Vue from 'vue'
import {
  Button,
  NavBar,
  Icon,
  Swipe,
  SwipeItem,
  ImagePreview,
  Popup,
  Stepper
} from 'vant'

Vue.prototype.$ImagePreview = ImagePreview
Vue.use(Button)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Popup)
Vue.use(Stepper)