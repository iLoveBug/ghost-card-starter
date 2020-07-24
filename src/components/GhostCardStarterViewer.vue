<template>
  <span>{{ $t("message.text") }}<code>{{this.text}}</code></span>
</template>
<script>
import { Base64 } from 'js-base64'
import { locale } from '../util/i18n.js'

const messages = {
  en: {
    message: {
      text: 'Hello: ',
    }
  },
  zh: {
    message: {
      text: '你好！',
    }
  }
}

export default {
  name: 'GhostCardStarterViewer',
  props: {
    data: {
      type: String,
      default: ''
    }
  },
  i18n: {
    locale: locale,
    messages: messages
  },
  computed: {
    text () {
      let json = this.data.length ? JSON.parse(Base64.decode(this.data)) : { text: '' }
      return json.text
    }
  }
}
</script>
