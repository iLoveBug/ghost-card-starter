import { version } from '../package.json'
import GhostCardStarterEditor from './components/GhostCardStarterEditor.vue'
import GhostCardStarterViewer from './components/GhostCardStarterViewer.vue'
import VueI18n from 'vue-i18n'

const components = [
  GhostCardStarterEditor,
  GhostCardStarterViewer
]

const install = function (Vue, options) {
  if (install.installed) return

  components.map(component => {
    Vue.component(component.name, component)
  })

  Vue.use(VueI18n)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version,
  install
}
