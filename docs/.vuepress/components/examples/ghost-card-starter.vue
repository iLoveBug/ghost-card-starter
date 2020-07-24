<template>
  <div>
    <h2>Editor</h2>
    <GhostCardStarterEditor :data="cardData" :saveCallback="saveCallback"></GhostCardStarterEditor>
    <h2>Viewer</h2>
    <GhostCardStarterViewer :data="cardData"></GhostCardStarterViewer>
  </div>
</template>
<script>
import GhostCardStarterEditor from '../../../../src/components/GhostCardStarterEditor.vue'
import GhostCardStarterViewer from '../../../../src/components/GhostCardStarterViewer.vue'
import { Base64 } from 'js-base64'

export default {
  name: 'examples-storytelling-scene-control',
  components: { GhostCardStarterEditor, GhostCardStarterViewer },
  data () {
    return {
      cardData: '', 
      saveCallback: undefined,
    }
  },
  beforeMount () {
    this.saveCallback = (data) => {
      this.cardData = data
    }
  },
  mounted () {
    this.cardData = Base64.encode(JSON.stringify({ text: 'world'}))
  }
}
</script>
